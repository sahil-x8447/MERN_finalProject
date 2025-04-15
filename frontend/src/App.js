import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddUserPage from './pages/AddUserPage';
import ViewUsersPage from './pages/ViewUsersPage';
import EditUserPage from './pages/EditUserPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer'; 


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddUserPage /></PrivateRoute>} />
        <Route path="/view" element={<PrivateRoute><ViewUsersPage /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditUserPage /></PrivateRoute>} />
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
