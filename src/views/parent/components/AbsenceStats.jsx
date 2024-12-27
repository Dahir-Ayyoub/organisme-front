import React from 'react';

const data = [
  { month: 'Jan', absences: 2 },
  { month: 'Feb', absences: 1 },
  { month: 'Mar', absences: 3 },
  { month: 'Apr', absences: 0 },
  { month: 'May', absences: 2 },
  { month: 'Jun', absences: 1 },
];

function AbsenceStats() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1C3B6E] mb-4">Absence Statistics</h2>
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.month} className="flex justify-between">
            <span>{item.month}</span>
            <span>{item.absences} absences</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AbsenceStats;