import React from 'react';

const remarks = [
  { id: 1, date: '2023-06-05', content: 'Absent due to illness. Doctor\'s note provided.', type: 'Excusé' },
  { id: 2, date: '2023-06-12', content: 'Missed class without notification.', type: 'Non excusé' },
  { id: 3, date: '2023-06-19', content: 'Family emergency. Parent called in.', type: 'Excusé' },
];

function RecentRemarks() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1C3B6E] mb-4">Recent Remarks</h2>
      <ul className="space-y-4">
        {remarks.map((remark) => (
          <li key={remark.id} className="border-b pb-2 last:border-b-0">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{remark.date}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                remark.type === 'Excusé' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {remark.type}
              </span>
            </div>
            <p className="text-sm text-gray-600">{remark.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentRemarks;