import React from 'react';

const AbsentListModal = ({ isOpen, onClose, absentStudents }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-bold mb-4">Absent Students</h2>
        <ul>
          {absentStudents.length > 0 ? (
            absentStudents.map((student, index) => (
              <li key={index} className="mb-2">{student}</li>
            ))
          ) : (
            <li>No students absent for this hour.</li>
          )}
        </ul>
        <button
          onClick={onClose}
          className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AbsentListModal;