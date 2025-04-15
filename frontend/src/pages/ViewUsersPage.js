import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from '../components/UserTable';

// 📄 Displays all students in a table
export default function ViewUsersPage() {
  const [users, setUsers] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  // 📥 Fetch all students on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  // 📦 Capture Grid API for exporting
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  // 📤 Export table to CSV
  const handleExport = () => {
    if (gridApi) {
      gridApi.exportDataAsCsv();
    } else {
      console.error("Grid API not ready!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-primary">All Students</h2>
        <button className="btn btn-outline-success" onClick={handleExport}>
          📤 Export to CSV
        </button>
      </div>
      <UserTable rowData={users} onGridReady={onGridReady} />
    </div>
  );
}
