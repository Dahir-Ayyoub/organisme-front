import React from 'react';
import { CheckCircle, XCircle } from 'react-feather';

function QuickSummary() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-[#1C3B6E]">Quick Summary</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-[#1C3B6E]">Present: 18 days</span>
        </div>
        <div className="flex items-center">
          <XCircle className="h-6 w-6 text-red-500 mr-2" />
          <span className="text-[#1C3B6E]">Absent: 2 days</span>
        </div>
      </div>
    </div>
  );
}

export default QuickSummary;

