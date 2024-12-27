import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, CheckSquare, X, AlertTriangle, UserX } from 'react-feather'

const VIEWS = {
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Calendar({ openAttendanceModal, attendanceData, onQuickAttendance, searchTerm, onShowAbsentStudents }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentView, setCurrentView] = useState(VIEWS.MONTH)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const changeDate = (amount) => {
    const newDate = new Date(currentDate)
    if (currentView === VIEWS.MONTH) {
      newDate.setMonth(newDate.getMonth() + amount)
    } else if (currentView === VIEWS.WEEK) {
      newDate.setDate(newDate.getDate() + amount * 7)
    } else {
      newDate.setDate(newDate.getDate() + amount)
    }
    setCurrentDate(newDate)
  }

  const renderHeader = () => (
    <div className="bg-[#1C3B6E] text-white p-4 flex justify-between items-center rounded-t-xl">
      <button onClick={() => changeDate(-1)} className="p-1 rounded-full hover:bg-[#4A90E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <h2 className="text-xl font-semibold">
        {currentView === VIEWS.MONTH 
          ? `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`
          : currentView === VIEWS.WEEK
          ? `Week of ${currentDate.toLocaleDateString()}`
          : currentDate.toLocaleDateString()}
      </h2>
      <button onClick={() => changeDate(1)} className="p-1 rounded-full hover:bg-[#4A90E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )

  const renderViewButtons = () => (
    <div className="flex justify-center my-4 space-x-2">
      {Object.values(VIEWS).map((view) => (
        <button
          key={view}
          onClick={() => setCurrentView(view)}
          className={`px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 ${
            currentView === view ? 'bg-[#4A90E2] text-white' : 'bg-white text-[#1C3B6E] hover:bg-[#1C3B6E] hover:text-white'
          }`}
        >
          {view.charAt(0).toUpperCase() + view.slice(1)}
        </button>
      ))}
    </div>
  )

  const getAttendanceStatus = (date) => {
    const dateString = date.toISOString().split('T')[0]
    const dayAttendance = attendanceData[dateString] || {}
    const totalStudents = Object.keys(dayAttendance).length
    const presentCount = Object.values(dayAttendance).filter(status => status === 'present').length
    const absentCount = Object.values(dayAttendance).filter(status => status === 'absent').length
    const lateCount = Object.values(dayAttendance).filter(status => status === 'late').length

    if (totalStudents === 0) return null

    if (presentCount === totalStudents) return 'bg-green-200'
    if (absentCount > 0) return 'bg-red-200'
    if (lateCount > 0) return 'bg-yellow-200'
    return 'bg-gray-200'
  }

  const renderQuickAttendance = (date) => {
    const dateString = date.toISOString().split('T')[0]
    const hasAbsentStudents = Object.values(attendanceData[dateString] || {}).some(status => status === 'absent')
    return (
      <div className="flex justify-center mt-2 space-x-1">
        <button
          onClick={() => onQuickAttendance(date, 'all', 'present')}
          className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          title="Mark all present"
        >
          <CheckSquare className="h-4 w-4" />
        </button>
        <button
          onClick={() => openAttendanceModal(date, 'Quick Attendance')}
          className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          title="Open attendance modal"
        >
          <AlertTriangle className="h-4 w-4" />
        </button>
        {hasAbsentStudents && (
          <button
            onClick={() => onShowAbsentStudents(date)}
            className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
            title="Show absent students"
          >
            <UserX className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }

  const renderMonthView = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const today = new Date()

    return (
      <div className="grid grid-cols-7 gap-2">
        {DAYS.map(day => (
          <div key={day} className="text-center font-semibold text-[#4A90E2] p-2">{day.slice(0, 3)}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="h-24"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1)
          const dateString = date.toISOString().split('T')[0]
          const isToday = date.toDateString() === today.toDateString()
          const attendanceStatus = getAttendanceStatus(date)

          return (
            <div 
              key={i} 
              className={`h-24 border p-2 ${isToday ? 'bg-blue-100' : ''} ${attendanceStatus || ''} hover:bg-opacity-80 transition-colors`}
            >
              <div className="flex justify-between items-center">
                <span className={`font-bold ${isToday ? 'text-blue-600' : ''}`}>{i + 1}</span>
                {renderQuickAttendance(date)}
              </div>
              {attendanceData[dateString] && (
                <div className="mt-2 text-xs">
                  <div>P: {Object.values(attendanceData[dateString]).filter(status => status === 'present').length}</div>
                  <div>A: {Object.values(attendanceData[dateString]).filter(status => status === 'absent').length}</div>
                  <div>L: {Object.values(attendanceData[dateString]).filter(status => status === 'late').length}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())

    return (
      <div className="grid grid-cols-7 gap-2">
        {DAYS.map((day, index) => {
          const date = new Date(startOfWeek)
          date.setDate(startOfWeek.getDate() + index)
          const dateString = date.toISOString().split('T')[0]
          const isToday = date.toDateString() === new Date().toDateString()
          const attendanceStatus = getAttendanceStatus(date)

          return (
            <div key={day} className={`border p-2 ${isToday ? 'bg-blue-100' : ''} ${attendanceStatus || ''} hover:bg-opacity-80 transition-colors`}>
              <div className="font-semibold mb-2">{day}</div>
              <div>{date.getDate()}</div>
              {renderQuickAttendance(date)}
              {attendanceData[dateString] && (
                <div className="mt-2 text-xs">
                  <div>P: {Object.values(attendanceData[dateString]).filter(status => status === 'present').length}</div>
                  <div>A: {Object.values(attendanceData[dateString]).filter(status => status === 'absent').length}</div>
                  <div>L: {Object.values(attendanceData[dateString]).filter(status => status === 'late').length}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const renderDayView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i)
    const dateString = currentDate.toISOString().split('T')[0]

    return (
      <div className="grid grid-cols-1 gap-2">
        {hours.map((hour) => (
          <div key={hour} className="flex items-center border p-2">
            <span className="w-16 font-semibold">{hour.toString().padStart(2, '0')}:00</span>
            <div className="flex-grow ml-4">
              {hour >= 9 && hour <= 17 && (
                <button
                  onClick={() => openAttendanceModal(new Date(currentDate.setHours(hour)), `Class at ${hour}:00`)}
                  className="text-sm bg-[#1C3B6E] text-white px-2 py-1 rounded hover:bg-[#4A90E2] transition-colors"
                >
                  <CheckSquare className="h-4 w-4 inline mr-1" />
                  Mark Attendance
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {renderHeader()}
      {renderViewButtons()}
      <div className="p-4">
        {currentView === VIEWS.MONTH && renderMonthView()}
        {currentView === VIEWS.WEEK && renderWeekView()}
        {currentView === VIEWS.DAY && renderDayView()}
      </div>
      <div className="bg-[#1C3B6E] text-white p-4 flex items-center justify-center">
        <Clock className="h-5 w-5 mr-2" />
        <span className="text-lg">Current Time: {currentTime.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

