// src/pages/Profile.jsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch additional profile information from Firestore (e.g., profile collection)
  useEffect(() => {
    if (!user) return;

    const fetchProfileData = async () => {
      try {
        const profileRef = doc(db, 'profiles', user.uid);
        const snap = await getDoc(profileRef);
        if (snap.exists()) {
          setAdditionalInfo(snap.data());
        }
      } catch (err) {
        console.error('Error fetching additional profile info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  }

  const creationTime = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString()
    : 'N/A';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800">
              {user.displayName || user.email.split('@')[0]}
            </h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <p className="text-gray-500 mt-2 text-sm">Member since: {creationTime}</p>

            {/* Edit Profile Button */}
            <button
              onClick={() => navigate('/profile/edit')}
              className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Additional Information: e.g., Address, Contact, Orders */}
        <div className="space-y-6">
          {/* Address & Contact */}
          <div>
            <h3 className="text-xl font-medium text-gray-700">Contact Information</h3>
            {loading ? (
              <p className="text-gray-500 mt-2">Loading...</p>
            ) : additionalInfo && (additionalInfo.phone || additionalInfo.address) ? (
              <div className="mt-2 space-y-1">
                {additionalInfo.phone && (
                  <p className="text-gray-600">
                    <span className="text-gray-500">Phone:</span> {additionalInfo.phone}
                  </p>
                )}
                {additionalInfo.address && (
                  <p className="text-gray-600">
                    <span className="text-gray-500">Address:</span> {additionalInfo.address}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-500 mt-2">No additional contact info provided.</p>
            )}
          </div>

          {/* Recent Orders (Placeholder) */}
          <div>
            <h3 className="text-xl font-medium text-gray-700">Recent Orders</h3>
            <p className="text-gray-500 mt-2">
              You have not placed any orders yet.
            </p>
            {/* 
              If you have an Orders collection, you can map through the latest orders here:
              additionalOrders.map(order => (...))
            */}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Account Actions */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

