import React from 'react';
import { Bell, User } from 'lucide-react';

function Header() {
  return (
    <header className="bg-[#1C3B6E] text-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold">École Absence Tracker</span>
        </div>
        <nav className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-[#4A90E2] transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#4A90E2] transition-colors">
            <User className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;