// pages/Profile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <p className="text-gray-700 font-medium">
          <span className="text-gray-500">Email:</span> {user?.email}
        </p>
        <p className="text-gray-700 font-medium mt-2">
          <span className="text-gray-500">Username:</span> {user?.email.split('@')[0]}
        </p>
        {/* Add more profile fields here later */}
      </div>
    </div>
  );
};

export default Profile;
