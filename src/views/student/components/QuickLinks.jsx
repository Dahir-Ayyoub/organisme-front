
import React, { useState } from 'react'
import { User, Calendar, Book, Activity } from 'react-feather'

export default function QuickLinks() {
  const links = [
    { icon: Book, label: 'Assignments' },
    { icon: Activity, label: 'Grades' },
    { icon: Calendar, label: 'Events' },
    { icon: User, label: 'Profile' },
  ]

  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
      <h2 className="text-3xl font-semibold text-[#1C3B6E] mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4">
        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:bg-[#4A90E2] hover:text-white transition-colors"
          >
            <Icon className="h-8 w-8 mb-2" />
            <span className="text-lg font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
