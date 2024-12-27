import React from 'react';
// import Header from './components/Header';
import AbsenceOverview from './components/AbsenceOverview';
import AbsenceCalendar from './components/AbsenceCalendar';
import RecentRemarks from './components/RecentRemarks';
import AbsenceStats from './components/AbsenceStats';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#1C3B6E] mb-6">Parent</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AbsenceCalendar />
          </div>
          <div>
            <AbsenceOverview />
          </div>
        </div>
        <div className="mt-6">
          <RecentRemarks />
        </div>
        <div className="mt-6">
          <AbsenceStats />
        </div>
      </main>
    </div>
  );
}

