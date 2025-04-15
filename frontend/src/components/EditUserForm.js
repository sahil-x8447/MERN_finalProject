import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Predefined program list
const programs = [
  'Computer Science',
  'Finance',
  'Full Stack Development',
  'Cyber Security',
  'Business Administration'
];

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  // Fetch user data on load
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => {
        toast.error("Failed to load student data");
        console.error(err);
      });
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, formData);
      toast.success("Student updated successfully");
      setTimeout(() => navigate('/view'), 1500);
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        toast.info("Student deleted");
        setTimeout(() => navigate('/view'), 1500);
      } catch (err) {
        toast.error("Delete failed");
        console.error(err);
      }
    }
  };

  // Wait until form is loaded
  if (!formData) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <ToastContainer position="top-center" autoClose={1500} />
      <h2 className="text-primary mb-4">✏️ Edit Student</h2>

      <form onSubmit={handleUpdate}>
        {/* First & Last Name */}
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

        {/* DOB & Program */}
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

        {/* Student ID */}
        <div className="mb-3">
          <input type="text" name="postalCode" placeholder="Student ID" className="form-control"
            value={formData.postalCode} onChange={handleChange} required />
        </div>

        {/* Address */}
        <div className="mb-3">
          <input type="text" name="address1" placeholder="Address 1" className="form-control"
            value={formData.address1} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="address2" placeholder="Address 2" className="form-control"
            value={formData.address2} onChange={handleChange} />
        </div>

        {/* City & Phone */}
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

        {/* Email */}
        <div className="mb-3">
          <input type="email" name="email" placeholder="Email" className="form-control"
            value={formData.email} onChange={handleChange} required />
        </div>

        {/* Notes */}
        <div className="mb-3">
          <textarea name="notes" placeholder="Notes" className="form-control"
            value={formData.notes} onChange={handleChange} />
        </div>

       {/* Buttons */}
<div className="d-flex gap-3">
  <button className="btn btn-primary">Update</button>
  <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
  <button
    type="button"
    className="btn btn-secondary"
    onClick={() => {
      if (window.confirm("Are you sure you want to cancel editing?")) {
        navigate('/view');
      }
    }}
  >
    Cancel
  </button>
</div>
</form>
    </div>
  );
}
