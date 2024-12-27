import React from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  return (
    <ReactCalendar
      className="w-full border-none shadow-none"
      tileClassName="text-[#1C3B6E] hover:bg-[#4A90E2] hover:text-white"
    />
  );
}

export default Calendar;

