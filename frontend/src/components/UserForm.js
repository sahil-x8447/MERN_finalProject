import React, { useState } from 'react';

// 🎓 List of available programs
const programs = [
  'Computer Science',
  'Finance',
  'Full Stack Development',
  'Cyber Security',
  'Business Administration'
];

export default function UserForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    dob: initialData.dob || '',
    address1: initialData.address1 || '',
    address2: initialData.address2 || '',
    city: initialData.city || '',
    postalCode: initialData.postalCode || '',
    program: initialData.program || '', 
    phoneNumber: initialData.phoneNumber || '',
    email: initialData.email || '',
    notes: initialData.notes || ''
  });

  // 🔄 Update form state when inputs change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 📤 Submit form to parent handler
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* 🧾 Text Inputs */}
      {['firstName', 'lastName', 'dob', 'address1', 'address2', 'city', 'postalCode', 'phoneNumber', 'email'].map((key) => (
        <div className="mb-3" key={key}>
          <label className="form-label">
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
          </label>
          <input
            type={key === 'dob' ? 'date' : 'text'}
            className="form-control"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {/* 🔽 Program Dropdown */}
      <div className="mb-3">
        <label className="form-label">Program</label>
        <select
          name="program"
          className="form-control"
          value={formData.program}
          onChange={handleChange}
          required
        >
          <option value="">Select Program</option>
          {programs.map((prog, index) => (
            <option key={index} value={prog}>{prog}</option>
          ))}
        </select>
      </div>

      {/* 🗒 Optional Notes Field */}
      <div className="mb-3">
        <label className="form-label">Notes</label>
        <textarea
          className="form-control"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      {/* ✅ Submit Button */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
