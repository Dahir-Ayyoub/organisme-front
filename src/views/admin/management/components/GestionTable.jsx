// import React, { useState } from "react";
// import CardMenu from "components/card/CardMenu";
// import Checkbox from "components/checkbox";
// import Card from "components/card";
// import { FaPlus, FaDownload, FaPrint, FaTrash, FaEdit, FaEye } from "react-icons/fa";
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import AddForm from "components/reusable/AddForm";
// import ImportForm from "components/reusable/ImportForm";
// import ConfirmationModal from "./ConfirmationModal"; // Import your modal component
// import EditDropdown from "./EditDropdown"; // Import your edit dropdown component
// import ViewDropdown from "./ViewDropdown"; // Import your view dropdown component

// const columnHelper = createColumnHelper();

// function GestionTable(props) {
//   const [isAddFormOpen, setIsAddFormOpen] = useState(false);
//   const [isImportFormOpen, setIsImportFormOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [dropdownType, setDropdownType] = useState(null);
//   const { tableData } = props;

//   // Initialize data state with selected property
//   const [data, setData] = useState(tableData.map(item => ({ ...item, selected: false })));

//   const columns = [
//     columnHelper.accessor("selected", {
//       id: "select",
//       header: () => (
//         <Checkbox
//           colorScheme="brandScheme"
//           onChange={(e) => {
//             const isChecked = e.target.checked;
//             setData(data.map(row => ({ ...row, selected: isChecked })));
//           }}
//         />
//       ),
//       cell: (info) => (
//         <Checkbox
//           colorScheme="brandScheme"
//           checked={info.row.original.selected}
//           onChange={() => {
//             const newData = data.map(row => 
//               row.id === info.row.original.id ? { ...row, selected: !row.selected } : row
//             );
//             setData(newData);
//           }}
//         />
//       ),
//     }),
//     columnHelper.accessor("name", {
//       id: "name",
//       header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>,
//       cell: (info) => (
//         <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
//       ),
//     }),
//     columnHelper.accessor("progress", {
//       id: "progress",
//       header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">Progress</p>,
//       cell: (info) => <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>,
//     }),
//     columnHelper.accessor("quantity", {
//       id: "quantity",
//       header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">QUANTITY</p>,
//       cell: (info) => <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>,
//     }),
//     columnHelper.accessor("date", {
//       id: "date",
//       header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>,
//       cell: (info) => <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>,
//     }),
//     columnHelper.accessor("action", {
//       id: "action",
//       header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">Action</p>,
//       cell: (info) => (
//         <div className="flex space-x-2"> 
//           <button
//             className="text-blue-500 hover:text-blue-700"
//             onClick={() => {
//               setSelectedRow(info.row.original);
//               setDropdownType('edit');
//             }}
//           >
//             <FaEdit className="text-2xl" />
//           </button>
//           <button
//             className="text-green-500 hover:text-green-700"
//             onClick={() => {
//               setSelectedRow(info.row.original);
//               setDropdownType('view');
//             }}
//           >
//             <FaEye className="text-2xl"/>
//           </button>
//           <button
//             className="text-red-500 hover:text-red-700"
//             onClick={() => {
//               setSelectedRow(info.row.original);
//               setIsModalOpen(true);
//             }}
//           >
//             <FaTrash className="text-2xl"/>
//           </button>
//         </div>
//       ),
//     }),
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   const handleAdd = () => setIsAddFormOpen(true);
//   const handleCloseAddForm = () => setIsAddFormOpen(false);
//   const handleImport = () => setIsImportFormOpen(true);
//   const handleCloseImportForm = () => setIsImportFormOpen(false);

//   const confirmDelete = () => {
//     const updatedData = data.filter(row => row.id !== selectedRow.id);
//     setData(updatedData);
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Card extra={"w-full h-full sm:overflow-auto px-6"}>
//         <header className="relative flex items-center justify-between pt-4">
//           <div className="text-xl font-bold text-navy-700 dark:text-white">Gestion des Etablissement</div>
//           <CardMenu />
//         </header>
//         <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex space-x-3">
//               <button className="flex items-center rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700" onClick={handleAdd}>
//                 <FaPlus className="mr-2" /> Add
//               </button>
//               <button className="flex items-center rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700" onClick={handleImport}>
//                 <FaDownload className="mr-2" /> Import
//               </button>
//               <button className="flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
//                 <FaPrint className="mr-2" /> Print
//               </button>
//             </div>
//             <button className="flex items-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700" onClick={() => setIsModalOpen(true)}>
//               <FaTrash className="mr-2" /> Delete
//             </button>
//           </div>

//           <table className="w-full">
//             <thead>
//               {table.getHeaderGroups().map(headerGroup => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map(header => (
//                     <th key={header.id} colSpan={header.colSpan} className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start">
//                       {flexRender(header.column.columnDef.header, header.getContext())}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody>
//               {table.getRowModel().rows.map(row => (
//                 <tr key={row.id}>
//                   {row.getVisibleCells().map(cell => (
//                     <td key={cell.id} className="min-w-[150px] border-white/0 py-3 pr-4">
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {isAddFormOpen && <AddForm onClose={handleCloseAddForm} />}
//         {isImportFormOpen && <ImportForm onClose={handleCloseImportForm} />}
//         {isModalOpen && (
//           <ConfirmationModal
//             isOpen={isModalOpen}
//             onClose={() => setIsModalOpen(false)}
//             onConfirm={confirmDelete}
//           />
//         )}
//         {selectedRow && (
//           <>
//             {dropdownType === 'edit' && (
//               <EditDropdown 
//                 rowData={selectedRow} 
//                 onClose={() => setDropdownType(null)} 
//                 onEdit={(updatedData) => {
//                   const updatedTableData = data.map(row =>
//                     row.id === updatedData.id ? updatedData : row
//                   );
//                   setData(updatedTableData);
//                 }} 
//               />
//             )}
//             {dropdownType === 'view' && (
//               <ViewDropdown 
//                 rowData={selectedRow} 
//                 onClose={() => setDropdownType(null)} 
//               />
//             )}
//           </>
//         )}
//       </Card>
//     </>
//   );
// }

// export default GestionTable;














import React, { useState } from "react";
import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import Card from "components/card";
import { FaPlus, FaDownload, FaPrint, FaTrash,FaPen } from "react-icons/fa";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AddForm from "components/reusable/AddForm";
import ImportForm from "components/reusable/ImportForm";
// import MiniCalendar from "components/calendar/MiniCalendar";
// import ConfirmationModal from "./ConfirmationModal";
// import EditDropdown from "./EditDropdown";
// import ViewDropdown from "./ViewDropdown";

function GestionTable(props) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isImportFormOpen, setIsImportFormOpen] = useState(false);
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()[0]}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STATUS</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("quantity", {
      id: "quantity",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          QUANTITY
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    
    columnHelper.accessor("action", {
      id: "action",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Action</p>
      ),
      cell: (info) => (
        <div className="flex space-x-2"> 
          <button
            className="text-mainColor  " // Style the buttons
            onClick={() => handleEdit(info.row.original)} // Pass row data
          >
            <FaPen className="mr-3" />
          </button>
          {/* <button
            className="text-green-500 hover:text-green-700"
            onClick={() => handleView(info.row.original)}
          >
            <FaEye className="text-2xl"/>
          </button> */}
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(info.row.original)}
          >
            <FaTrash className=""/>
          </button>
        </div>
      ),
    }),
  ]; // eslint-disable-next-line

  const handleImport = () => {
    setIsImportFormOpen(true);
  };

  const handleCloseImportForm = () => {
    setIsImportFormOpen(false);
  };


  // Crud Function Logic
  const handleAdd = () => {
    setIsAddFormOpen(true);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  const handleEdit = (rowData) => {
    console.log("Edit row:", rowData);
  };
  
  const handleView = (rowData) => {
    console.log("View row:", rowData);
  
  };
  
  const handleDelete = (rowData) => {
    console.log("Delete row:", rowData);
  
  };
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <>
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Gestion des Etablissement
        </div>

        <CardMenu />
      </header>
      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">


            <div className="flex items-center justify-between">
            <button className="flex items-center rounded bg-mainColor px-4 py-2 font-bold text-white"
                onClick={handleAdd}  >
                  <FaPlus className="mr-2" /> Add
                </button>
              <div className="flex space-x-3">
                <button className="flex items-center rounded bg-secondColor px-4 py-2 font-bold text-white "
                onClick={handleImport}  >
                  <FaDownload className="mr-2" /> Import
                </button>
                <button className="flex items-center rounded bg-secondColor px-4 py-2 font-bold text-white ">
                  <FaPrint className="mr-2" /> Print
                </button>
              <button className="flex items-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                <FaTrash className="mr-2" /> Delete
              </button>
              </div>
            </div>

        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {isAddFormOpen && <AddForm onClose={handleCloseAddForm} />}
      {isImportFormOpen && <ImportForm onClose={handleCloseImportForm} />}
    </Card>
    
    </>
  );
}

export default GestionTable;
const columnHelper = createColumnHelper();

