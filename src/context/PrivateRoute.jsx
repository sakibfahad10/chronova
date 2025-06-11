import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // If authentication state is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }
// If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // If user is logged in, show the child components (like Checkout)
  return children;
};
export default PrivateRoute;
