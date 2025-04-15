import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function UserTable({ rowData, onGridReady }) {
  // 📊 Define columns for Ag-Grid table
  const columnDefs = [
    { field: 'firstName', headerName: 'First Name' },
    { field: 'lastName', headerName: 'Last Name' },
    { field: 'postalCode', headerName: 'Student ID' },
    { field: 'program', headerName: 'Program' },
    { field: 'email', headerName: 'Email' },
    {
      headerName: 'Actions',
      field: '_id',
      cellRendererFramework: (params) => (
        <div className="d-flex gap-2">
          {/* ✏️ Edit Button */}
          <Link to={`/edit/${params.value}`} className="btn btn-sm btn-warning">Edit</Link>

          {/* 🗑 Delete Button */}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              if (window.confirm("Delete this student?")) {
                axios.delete(`http://localhost:5000/api/users/${params.value}`)
                  .then(() => window.location.reload())
                  .catch(err => console.error(err));
              }
            }}
          >Delete</button>
        </div>
      )
    }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        onGridReady={onGridReady} // 📦 Needed to export CSV
        rowData={rowData}         // 📄 Student data
        columnDefs={columnDefs}   // 📋 Columns defined above
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
}
