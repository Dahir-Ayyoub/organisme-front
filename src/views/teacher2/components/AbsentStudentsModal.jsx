import React from 'react'
import { X, UserX, Check, AlertCircle } from 'react-feather'

export default function AbsentStudentsModal({ isOpen, onClose, absentStudents, date, onStatusChange }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] flex flex-col animate-fadeIn">
        <div className="bg-[#1C3B6E] text-white p-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Absent Students</h2>
          <button onClick={onClose} className="text-white hover:text-[#4A90E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 rounded-full p-1">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          <p className="text-gray-600 mb-4">{date.toDateString()}</p>
          {absentStudents.length > 0 ? (
            <ul className="space-y-2">
              {absentStudents.map(student => (
                <li key={student.id} className="flex items-center justify-between p-2 bg-red-100 rounded-lg">
                  <div className="flex items-center">
                    <UserX className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-red-700">{student.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onStatusChange(date, student.id, 'present')}
                      className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
                      title="Mark as present"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onStatusChange(date, student.id, 'late')}
                      className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                      title="Mark as late"
                    >
                      <AlertCircle className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No absent students.</p>
          )}
        </div>
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#3A7BC2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

