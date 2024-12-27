import React from 'react';
import { Clock } from 'react-feather';

const schedule = [
  { time: "09:00 AM", subject: "Mathematics" },
  { time: "10:30 AM", subject: "Science" },
  { time: "12:00 PM", subject: "Lunch Break" },
  { time: "01:00 PM", subject: "History" },
  { time: "02:30 PM", subject: "Physical Education" },
];

function DailySchedule() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-[#1C3B6E]">Today's Schedule</h2>
      <ul className="space-y-2">
        {schedule.map((item, index) => (
          <li key={index} className="flex items-center">
            <Clock className="h-4 w-4 text-[#4A90E2] mr-2" />
            <span className="font-medium text-[#1C3B6E]">{item.time}</span>
            <span className="mx-2 text-[#1C3B6E]">-</span>
            <span className="text-[#1C3B6E]">{item.subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailySchedule;

