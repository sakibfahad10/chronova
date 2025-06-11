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
   // Guest or unauthenticated user → will be redirected to the login page

    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
   // Logged in but not admin → redirect to Forbidden or Home

    return <Navigate to="/" replace />;
  }

 // Finally, if admin → will display the UI

  return children;
};

export default AdminRoute;
