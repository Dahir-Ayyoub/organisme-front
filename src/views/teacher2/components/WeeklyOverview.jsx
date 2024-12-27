import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function WeeklyOverview({ attendanceData }) {
  const getWeekData = () => {
    const today = new Date()
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()))
    const weekData = []

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart)
      date.setDate(date.getDate() + i)
      const dateString = date.toISOString().split('T')[0]
      const dayData = attendanceData[dateString] || {}

      weekData.push({
        name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
        present: Object.values(dayData).filter(status => status === 'present').length,
        absent: Object.values(dayData).filter(status => status === 'absent').length,
        late: Object.values(dayData).filter(status => status === 'late').length,
      })
    }

    return weekData
  }

  const weekData = getWeekData()

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-semibold text-[#1C3B6E] mb-4">Weekly Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weekData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#4CAF50" />
          <Bar dataKey="absent" fill="#F44336" />
          <Bar dataKey="late" fill="#FFC107" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

