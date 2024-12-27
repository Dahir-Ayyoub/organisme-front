import React from 'react';

function AbsenceOverview() {
  return (
    <div className="bg-[#4A90E2] text-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4">Absence Overview</h2>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm">Total Absences</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm">Excusé</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm">Non excusé</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">97%</p>
          <p className="text-sm">Taux de Présence</p>
        </div>
      </div>
    </div>
  );
}

export default AbsenceOverview;