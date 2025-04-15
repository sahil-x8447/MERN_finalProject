import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 Handle admin login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('isLoggedIn', 'true');
      toast.success(res.data.message);
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      toast.error('Invalid email or password!');
    }
  };

  return (
    <div className="login-wrapper">
      <ToastContainer position="top-center" autoClose={1500} />
      <div className="login-card">
        <h2 className="text-center text-primary mb-4">🎓 Student Portal Login</h2>

        {/* 📌 Admin demo credentials */}
        <p className="text-muted text-center mb-3">
          Demo Login – <strong>admin@portal.com / admin123</strong>
        </p>

        {/* 🔐 Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
