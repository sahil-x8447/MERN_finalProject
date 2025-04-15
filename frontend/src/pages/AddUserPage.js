import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🏫 Predefined list of allowed programs
const programs = [
  'Computer Science',
  'Finance',
  'Full Stack Development',
  'Cyber Security',
  'Business Administration'
];

// 📋 Add Student Page Component
export default function AddUserPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    program: '',
    phoneNumber: '',
    email: '',
    notes: ''
  });

  // ✏️ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 📤 Submit new student data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.program) {
      toast.error("Please select a program");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/users', formData);
      toast.success("Student added successfully!");

      // 🔁 Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        address1: '',
        address2: '',
        city: '',
        postalCode: '',
        program: '',
        phoneNumber: '',
        email: '',
        notes: ''
      });
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("Student with this ID already exists");
      } else {
        toast.error("Failed to add student");
      }
      console.error("Add student error:", err);
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer position="top-center" autoClose={1500} />
      <h2 className="text-primary mb-4">➕ Add Student</h2>

      {/* 📄 Student Form */}
      <form onSubmit={handleSubmit}>
        {/* 👤 Name Fields */}
        <div className="row mb-3">
          <div className="col">
            <input type="text" name="firstName" placeholder="First Name" className="form-control"
              value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col">
            <input type="text" name="lastName" placeholder="Last Name" className="form-control"
              value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        {/* 📆 DOB + Program */}
        <div className="row mb-3">
          <div className="col">
            <input type="date" name="dob" className="form-control"
              value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="col">
            <select name="program" className="form-control"
              value={formData.program} onChange={handleChange} required>
              <option value="">Select Program</option>
              {programs.map((prog, index) => (
                <option key={index} value={prog}>{prog}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 🆔 Student ID */}
        <div className="mb-3">
          <input type="text" name="postalCode" placeholder="Student ID" className="form-control"
            value={formData.postalCode} onChange={handleChange} required />
        </div>

        {/* 🏠 Address */}
        <div className="mb-3">
          <input type="text" name="address1" placeholder="Address 1" className="form-control"
            value={formData.address1} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="address2" placeholder="Address 2" className="form-control"
            value={formData.address2} onChange={handleChange} />
        </div>

        {/* 🏙 City + 📱 Phone */}
        <div className="row mb-3">
          <div className="col">
            <input type="text" name="city" placeholder="City" className="form-control"
              value={formData.city} onChange={handleChange} required />
          </div>
          <div className="col">
            <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control"
              value={formData.phoneNumber} onChange={handleChange} required />
          </div>
        </div>

        {/* 📧 Email */}
        <div className="mb-3">
          <input type="email" name="email" placeholder="Email" className="form-control"
            value={formData.email} onChange={handleChange} required />
        </div>

        {/* 🗒 Notes */}
        <div className="mb-3">
          <textarea name="notes" placeholder="Notes" className="form-control"
            value={formData.notes} onChange={handleChange} />
        </div>

        <button className="btn btn-success w-100">Add Student</button>
      </form>
    </div>
  );
}
