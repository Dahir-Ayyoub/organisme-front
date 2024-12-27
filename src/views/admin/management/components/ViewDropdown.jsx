import React from 'react';

function ViewDropdown({ rowData, onClose }) {
  return (
    <div className="absolute z-10 bg-white border rounded shadow-lg mt-1 p-4" style={{ minWidth: '300px' }}>
      <div className="font-bold mb-2">Row Details</div>
      <div className="mb-2">Name: {rowData.name}</div>
      <div className="mb-2">Progress: {rowData.progress}</div>
      <div className="mb-2">Quantity: {rowData.quantity}</div>
      <div className="mb-2">Date: {rowData.date}</div>
      <div className="cursor-pointer text-blue-500 hover:underline" onClick={onClose}>
        Close
      </div>
    </div>
  );
}

export default ViewDropdown;