import React from 'react';
import { flexRender } from '@tanstack/react-table';

function TableBody({ rows }) {
  return (
    <tbody>
      {rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className="min-w-[150px] border-white/0 py-3 pr-4">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;