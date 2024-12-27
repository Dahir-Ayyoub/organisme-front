import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Users, UserCheck, UserX, UserMinus } from 'react-feather'

export default function DailySummary({ date, attendanceData, onOpenAbsentModal }) {
  const presentCount = Object.values(attendanceData).filter(status => status === 'present').length
  const absentCount = Object.values(attendanceData).filter(status => status === 'absent').length
  const lateCount = Object.values(attendanceData).filter(status => status === 'late').length
  const totalStudents = Object.keys(attendanceData).length

  const data = [
    { name: 'Present', value: presentCount, color: '#4CAF50' },
    { name: 'Absent', value: absentCount, color: '#F44336' },
    { name: 'Late', value: lateCount, color: '#FFC107' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-semibold text-[#1C3B6E] mb-4">Daily Summary</h2>
      <p className="text-gray-600 mb-4">{date.toDateString()}</p>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-[#1C3B6E] mr-2" />
          <span>Total: {totalStudents}</span>
        </div>
        <div className="flex items-center">
          <UserCheck className="h-5 w-5 text-green-500 mr-2" />
          <span>Present: {presentCount}</span>
        </div>
        <div className="flex items-center">
          <UserX className="h-5 w-5 text-red-500 mr-2" />
          <span>Absent: {absentCount}</span>
        </div>
        <div className="flex items-center">
          <UserMinus className="h-5 w-5 text-yellow-500 mr-2" />
          <span>Late: {lateCount}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      {absentCount > 0 && (
        <button
          onClick={onOpenAbsentModal}
          className="mt-4 w-full bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#3A7BC2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50"
        >
          View Absent Students
        </button>
      )}
    </div>
  )
}

