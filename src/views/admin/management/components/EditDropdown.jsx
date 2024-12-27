import React, { useState } from 'react';

function EditDropdown({ rowData, onEdit, onClose }) {
  const [formData, setFormData] = useState({
    name: rowData.name,
    progress: rowData.progress,
    quantity: rowData.quantity,
    date: rowData.date,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onEdit({ ...rowData, ...formData }); // Update the row with edited data
    onClose();
  };

  return (
    <div className="absolute z-10 bg-white border rounded shadow-lg mt-1 p-4" style={{ minWidth: '300px' }}>
      <div className="font-bold mb-2">Edit Item</div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-1 mb-2 w-full"
        />
      </div>
      <div>
        <label>Progress:</label>
        <input
          type="text"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          className="border rounded p-1 mb-2 w-full"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border rounded p-1 mb-2 w-full"
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded p-1 mb-2 w-full"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white rounded p-1 mr-2">Save</button>
      <button onClick={onClose} className="bg-gray-300 rounded p-1">Cancel</button>
    </div>
  );
}

export default EditDropdown;