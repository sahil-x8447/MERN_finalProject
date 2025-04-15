import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  // 🔐 Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // ✅ Show protected content or redirect to login
  return isLoggedIn ? children : <Navigate to="/" replace />;
}
