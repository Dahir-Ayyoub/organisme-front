// import React from 'react';
// import Calendar from './Calendar';
// import QuickSummary from './QuickSummary';
// import DailySchedule from './DailySchedule';

// function StudentDashboard() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
      
//       <main className="flex-grow p-4 pb-16">
//         <h1 className="text-2xl font-bold text-[#1C3B6E] mb-4">Welcome back, Alex!</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-2 text-[#1C3B6E]">Your Schedule</h2>
//             <Calendar />
//           </div>
//           <div className="space-y-4">
//             <QuickSummary />
//             <DailySchedule />
//           </div>
//         </div>
//       </main>
      
//     </div>
//   );
// }

// export default StudentDashboard;



import React from 'react'
import { User, Calendar, CheckCircle, XCircle, Clock } from 'react-feather'

export default function StudentDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <main className="bg-white p-8 rounded-b-2xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarSection />
          <AttendanceSummary />
        </div>
        <DailySchedule />
      </main>
    </div>
  )
}

function CalendarSection() {
  return (
    <div className="border-2 border-[#1C3B6E] rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-[#1C3B6E] mb-4 flex items-center">
        <Calendar className="h-8 w-8 mr-3" />
        Your Schedule
      </h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="font-bold text-[#4A90E2]">{day}</div>
        ))}
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className={`p-3 rounded-full ${i === 14 ? 'bg-[#4A90E2] text-white' : 'hover:bg-gray-100'}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

function AttendanceSummary() {
  return (
    <div className="border-2 border-[#1C3B6E] rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-[#1C3B6E] mb-4">Attendance Summary</h2>
      <div className="flex justify-around text-center">
        <div className="flex flex-col items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
          <span className="text-2xl font-bold text-[#1C3B6E]">18</span>
          <span className="text-xl text-gray-600">Present</span>
        </div>
        <div className="flex flex-col items-center">
          <XCircle className="h-16 w-16 text-red-500 mb-2" />
          <span className="text-2xl font-bold text-[#1C3B6E]">2</span>
          <span className="text-xl text-gray-600">Absent</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div className="bg-[#4A90E2] h-6 rounded-full" style={{ width: '90%' }}></div>
        </div>
        <p className="text-center mt-2 text-xl text-[#1C3B6E]">90% Attendance Rate</p>
      </div>
    </div>
  )
}

function DailySchedule() {
  const schedule = [
    { time: "09:00 AM", subject: "Mathematics" },
    { time: "10:30 AM", subject: "Science" },
    { time: "12:00 PM", subject: "Lunch Break" },
    { time: "01:00 PM", subject: "History" },
    { time: "02:30 PM", subject: "Physical Education" },
  ]

  return (
    <div className="mt-8 border-2 border-[#1C3B6E] rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-[#1C3B6E] mb-4 flex items-center">
        <Clock className="h-8 w-8 mr-3" />
        Today's Schedule
      </h2>
      <ul className="space-y-4">
        {schedule.map((item, index) => (
          <li key={index} className="flex items-center text-xl">
            <span className="font-medium text-[#4A90E2] w-32">{item.time}</span>
            <span className="text-[#1C3B6E]">{item.subject}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

