import React from 'react';
import { flexRender } from '@tanstack/react-table';

function TableHeader({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id} className="!border-px !border-gray-400">
          {headerGroup.headers.map(header => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              onClick={header.column.getToggleSortingHandler()}
              className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
            >
              <div className="items-center justify-between text-xs text-gray-200">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default TableHeader;