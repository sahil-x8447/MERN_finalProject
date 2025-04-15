import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <div className="container mt-5">
      <div className="dashboard-card text-center">
        {/* 🎓 Portal Header */}
        <h1 className="mb-4 text-primary">Welcome to the Student Portal</h1>
        <p className="lead">Easily manage your class roster and student data.</p>

        {/* ➕ Add / 📋 View Actions */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <Link to="/add" className="btn btn-success btn-lg w-100">➕ Add Student</Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/view" className="btn btn-info btn-lg w-100">📋 View Students</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
