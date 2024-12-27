import React from 'react';
import { FaPlus, FaDownload, FaPrint, FaTrash } from 'react-icons/fa';

function TableActions({ onAdd, onImport, onDelete }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        <button
          className="flex items-center rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={onAdd}
        >
          <FaPlus className="mr-2" /> Add
        </button>
        <button
          className="flex items-center rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
          onClick={onImport}
        >
          <FaDownload className="mr-2" /> Import
        </button>
        <button className="flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          <FaPrint className="mr-2" /> Print
        </button>
      </div>
      <button
        className="flex items-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={onDelete}
      >
        <FaTrash className="mr-2" /> Delete
      </button>
    </div>
  );
}

export default TableActions;