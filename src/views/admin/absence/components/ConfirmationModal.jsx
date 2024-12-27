import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, selectedStudents, studentStatus }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Confirm Absences</h2>
        <p>Are you sure that these students are absent:</p>
        <ul className="list-disc list-inside mb-4">
          {selectedStudents.filter(student => studentStatus[student.value] === 'absent').map(student => (
            <li key={student.value}>{student.label}</li>
          ))}
        </ul>
        <button
          onClick={onConfirm}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Sure
        </button>
        <button
          onClick={onCancel}
          className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;