import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // যদি অথেনটিকেশন স্টেট এখনও লোড হয়, তাহলে একটা লোডিং মেসেজ দেখাও
  if (loading) {
    return <div>Loading...</div>;
  }

  // যদি ইউজার লগইন না থাকে, তাহলে লগইন পেজে রিডাইরেক্ট করো
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ইউজার লগইন থাকলে, চাইল্ড কম্পোনেন্টগুলো দেখাও (যেমন Checkout)
  return children;
};

export default PrivateRoute;
