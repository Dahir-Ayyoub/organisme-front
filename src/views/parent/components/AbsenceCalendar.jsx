import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const absences = [
  { date: new Date(2023, 5, 5), type: 'Excused' },
  { date: new Date(2023, 5, 12), type: 'Unexcused' },
  { date: new Date(2023, 5, 19), type: 'Excused' },
  { date: new Date(2023, 5, 26), type: 'Unexcused' },
];

function AbsenceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const selectedAbsence = absences.find(
    (absence) => absence.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-[#1C3B6E] mb-4">Absence Calendar</h2>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="text-[#1C3B6E] hover:text-[#4A90E2]"
        >
          &lt; Prev
        </button>
        <h3 className="text-lg font-medium">{format(currentMonth, 'MMMM yyyy')}</h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="text-[#1C3B6E] hover:text-[#4A90E2]"
        >
          Next &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 flex-grow">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-gray-500">{day}</div>
        ))}
        {monthDays.map(day => {
          const absence = absences.find(a => a.date.toDateString() === day.toDateString());
          return (
            <button
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm
                ${selectedDate?.toDateString() === day.toDateString() ? 'bg-[#4A90E2] text-white' : ''}
                ${absence ? (absence.type === 'Excused' ? 'bg-green-100' : 'bg-red-100') : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Selected Date: {format(selectedDate, 'MMMM d, yyyy')}</h4>
          {selectedAbsence && (
            <div className={`p-2 rounded ${selectedAbsence.type === 'Excused' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {selectedAbsence.type} Absence
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AbsenceCalendar;