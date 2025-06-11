import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // 1. অন মাউন্ট: লোকাল Firestore থেকে তথ্য লোড ও Auth থেকে displayName
  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      try {
        const profileRef = doc(db, 'profiles', user.uid);
        const snap = await getDoc(profileRef);
        setFormData({
          displayName: user.displayName || '',
          phone: snap.exists() ? snap.data().phone || '' : '',
          address: snap.exists() ? snap.data().address || '' : '',
        });
      } catch (err) {
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. সাবমিট: Auth & Firestore-এ লেখা
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      // a) Firebase Auth এ displayName আপডেট
      if (formData.displayName !== user.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: formData.displayName,
        });
      }

      // b) Firestore - profiles/{uid} ডকুমেন্ট
      const profileRef = doc(db, 'profiles', user.uid);
      await setDoc(
        profileRef,
        {
          phone: formData.phone,
          address: formData.address,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      navigate('/profile');
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Unable to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading profile…</p>;
  }

  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
            disabled={saving}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={saving}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            disabled={saving}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>
        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate('/profile')}
            disabled={saving}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
