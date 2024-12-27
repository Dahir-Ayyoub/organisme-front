import React, { useState, useEffect } from 'react'
import { X, Check, AlertCircle, Search } from 'react-feather'

export default function AttendanceModal({ isOpen, onClose, onSave, classInfo, date, initialAttendance, students }) {
  const [attendance, setAttendance] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (isOpen) {
      setAttendance(initialAttendance || students.reduce((acc, student) => ({ ...acc, [student.id]: 'present' }), {}))
      setSearchTerm('')
    }
  }, [isOpen, initialAttendance, students])

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }))
  }

  const handleSave = () => {
    onSave(attendance)
  }

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] flex flex-col animate-fadeIn">
        <div className="bg-[#1C3B6E] text-white p-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Mark Attendance</h2>
          <button onClick={onClose} className="text-white hover:text-[#4A90E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 rounded-full p-1">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          <p className="text-[#4A90E2] font-semibold mb-2">{classInfo}</p>
          <p className="text-gray-600 mb-4">{date.toDateString()}</p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <ul className="space-y-2">
            {filteredStudents.map(student => (
              <li key={student.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span>{student.name}</span>
                <div className="flex space-x-2">
                  {['present', 'absent', 'late'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleAttendanceChange(student.id, status)}
                      className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                        attendance[student.id] === status
                          ? status === 'present'
                            ? 'bg-green-500 text-white focus:ring-green-300'
                            : status === 'absent'
                            ? 'bg-red-500 text-white focus:ring-red-300'
                            : 'bg-yellow-500 text-white focus:ring-yellow-300'
                          : 'bg-gray-200 text-gray-600 focus:ring-gray-400'
                      }`}
                    >
                      {status === 'present' && <Check className="h-4 w-4" />}
                      {status === 'absent' && <X className="h-4 w-4" />}
                      {status === 'late' && <AlertCircle className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={handleSave}
            className="w-full bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#3A7BC2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50"
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  )
}

