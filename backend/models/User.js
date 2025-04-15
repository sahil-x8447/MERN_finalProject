const mongoose = require('mongoose');

// ✅ User Schema for Student Portal 
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  postalCode: { type: String, required: true}, 
  program: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
