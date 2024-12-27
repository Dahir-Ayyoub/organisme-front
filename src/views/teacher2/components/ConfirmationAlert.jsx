import React from 'react'
import { AlertTriangle } from 'react-feather'

export default function ConfirmationAlert({ isOpen, onClose, onConfirm, absentStudents }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 animate-fadeIn">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
          <h2 className="text-xl font-semibold text-[#1C3B6E]">Confirm Absences</h2>
        </div>
        <p className="mb-4 text-gray-700">
          {absentStudents && absentStudents.length > 0
            ? "The following students are marked as absent:"
            : "No students are marked as absent."}
        </p>
        {absentStudents && absentStudents.length > 0 && (
          <ul className="mb-6 list-disc pl-5">
            {absentStudents.map(student => (
              <li key={student.id} className="text-gray-700">{student.name}</li>
            ))}
          </ul>
        )}
        <p className="mb-6 text-gray-700">
          Are you sure you want to save this attendance record?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A7BC2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

