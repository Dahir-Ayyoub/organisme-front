import React from 'react'
import { Search } from 'react-feather'

export default function SearchBar({ onSearch }) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search students, classes, or dates..."
        className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  )
}

