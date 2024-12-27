import React from 'react';

export const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        {children}
      </table>
    </div>
  );
};