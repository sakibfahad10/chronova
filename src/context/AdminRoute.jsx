// src/context/AdminRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminRoute = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    // গেস্ট বা অবটেন্টিকেটেড ইউজার → লগইনপেজে নিয়ে যাবে
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
    // লগইন করা কিন্তু অ্যাডমিন না → Forbidden বা হোমে ফেরত
    return <Navigate to="/" replace />;
  }

  // অবশেষে অ্যাডমিন হলে UI দেখাবে
  return children;
};

export default AdminRoute;
