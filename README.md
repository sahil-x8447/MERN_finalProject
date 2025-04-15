# 🎓 Student Portal - MERN Stack Application

> **Final FullStack JavaScript Project**  
> **Author:** Sahil Sharma  
> **CNumber:** C0930789

A full-featured MERN (MongoDB, Express, React, Node.js) web application that allows administrators to manage student records with an intuitive interface. Includes authentication, form validations, CRUD operations, CSV export, and more.

---

## 🚀 Features

- 🔐 **Admin Login** – Secured login using MongoDB credentials  
- ➕ **Add Student** – Submit detailed student records via form  
- ✏️ **Edit Student** – Update student details  
- 🗑 **Delete Student** – Remove student entries  
- 📋 **View Students** – Table view with pagination (AG Grid)  
- 📤 **Export to CSV** – Download all records  
- ✅ **Form Validations** – Required fields & unique Student ID  
- 🔁 **Protected Routes** – Only logged-in admin can access dashboard  
- 🛎️ **Toast Feedback** – Instant feedback using `react-toastify`

---

## 📁 Folder Structure

```
.
├── backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── server.js
│
├── frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
└── README.md
```

---

## ⚙️ Tech Stack

**Frontend:**
- React
- React Router DOM
- Axios
- Bootstrap
- AG Grid
- React Toastify

**Backend:**
- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- CORS

---

## 🔐 Admin Login (Hardcoded in DB)

```bash
Email: admin@portal.com
Password: admin123
```

---

## 🧪 Local Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/student-portal.git
cd student-portal
```

### 2. Backend Setup
```bash
cd backend
npm install
touch .env
# Inside .env:
MONGO_URI=your_mongo_db_connection_string
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

The frontend runs on `http://localhost:3000`  
The backend runs on `http://localhost:5000`

---

## ✅ Project Requirements Checklist

- [x] Uses MERN Stack (MongoDB, Express, React, Node.js)
- [x] React form to Add/Edit student
- [x] Data persisted in MongoDB
- [x] Use of Axios for API calls
- [x] Use of Bootstrap and/or Evergreen components
- [x] Display page with AG Grid
- [x] Delete option available
- [x] Export to CSV functionality
- [x] Protected login route with private route logic
- [x] No node_modules included
- [x] Zipped with proper CNumber

---

## ✨ Notes

- Only predefined programs can be selected.
- Student ID must be unique
- All fields are validated.
- Cancel button available on edit form.
- Export is done through AG Grid CSV export.

----

## 👤 Author

**Sahil Sharma**  
**CNumber:** C0930789  
GitHub: [sahil-x8447](https://github.com/sahil-x8447)

---
