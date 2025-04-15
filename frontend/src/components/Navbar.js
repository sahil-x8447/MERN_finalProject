import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  // 🔓 Handles logout functionality
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear session
    toast.info('You have been logged out'); // Show feedback
    setTimeout(() => navigate('/'), 1500); // Redirect after short delay
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        {/* 🏫 Brand Title */}
        <Link className="navbar-brand fw-bold" to="/dashboard">🎓 Student Portal</Link>

        {/* 🔗 Navigation Links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Student</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">View Students</Link>
            </li>
            <li className="nav-item">
              {/* 🚪 Logout Button */}
              <button className="nav-link btn btn-link text-white" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer position="top-center" autoClose={1500} />
    </>
  );
}
