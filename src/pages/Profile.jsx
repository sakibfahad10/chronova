// src/pages/Profile.jsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      try {
        const snap = await getDoc(doc(db, 'profiles', user.uid));
        if (snap.exists()) setInfo(snap.data());
      } catch (err) {
        console.error('Profile load error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <p className="text-gray-600 text-lg text-center">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  const created = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString()
    : 'N/A';

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-8">
          {/* Avatar */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl font-bold">
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : user.email.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {user.displayName || user.email.split('@')[0]}
            </h1>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <p className="text-gray-500 mt-2 text-sm">
              Member since: {created}
            </p>
            <button
              onClick={() => navigate('/profile/edit')}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        <hr />

        {/* Contact & Orders */}
        <div className="px-6 py-4 space-y-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Contact Information
            </h2>
            {loading ? (
              <p className="text-gray-500 mt-2">Loading...</p>
            ) : info?.phone || info?.address ? (
              <ul className="mt-2 space-y-1 text-gray-600">
                {info.phone && <li>📞 {info.phone}</li>}
                {info.address && <li>🏠 {info.address}</li>}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">
                No additional contact info provided.
              </p>
            )}
          </div>

          {/* Recent Orders */}
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Recent Orders
            </h2>
            <p className="text-gray-500 mt-2">You have no recent orders.</p>
          </div>
        </div>

        <hr />

        {/* Logout */}
        <div className="p-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;

