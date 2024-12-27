// new idea  now

// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import Select from 'react-select';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "tailwindcss/tailwind.css";

// const localizer = momentLocalizer(moment);

// const FullCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("Class A");
//   const [students] = useState([
//     { value: "Alice", label: "Alice" },
//     { value: "Bob", label: "Bob" },
//     { value: "Charlie", label: "Charlie" },
//     { value: "David", label: "David" },
//     { value: "Eva", label: "Eva" }
//   ]); 
//   const [absentStudents, setAbsentStudents] = useState([]);
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

//   const handleSelectSlot = ({ start }) => {
//     setSelectedTimeSlot(start);
//     setModalOpen(true);
//   };

//   const handleSaveAbsences = () => {
//     if (!selectedTimeSlot || selectedStudents.length === 0) return;

//     selectedStudents.forEach(student => {
//       const isDuplicate = events.some(event => {
//         return (
//           event.start.getTime() === selectedTimeSlot.getTime() && 
//           event.title.startsWith(student.label)
//         );
//       });

//       if (!isDuplicate) {
//         const newEvent = {
//           start: selectedTimeSlot,
//           end: moment(selectedTimeSlot).add(1, 'hour').toDate(),
//           title: `${student.label} - Absent`,
//           allDay: false,
//         };
//         setEvents(prevEvents => [...prevEvents, newEvent]);
//       }
//     });

//     setAbsentStudents([...absentStudents, ...selectedStudents]); 
//     setSelectedStudents([]); 
//     setModalOpen(false); 
//   };

//   return (
//     <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-white">Record Student Absences</h1>
//           <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="bg-white p-2 rounded">
//             <option value="Class A">Class A</option>
//             <option value="Class B">Class B</option>
//             <option value="Class C">Class C</option>
            
//           </select>
//         </div>
//         <div className="p-4">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             onSelectEvent={(event) => alert(event.title)} 
//             onSelectSlot={handleSelectSlot} 
//             style={{ height: 500 }}
//             className="bg-white rounded-lg"
//             eventPropGetter={(event) => ({
//               style: {
//                 backgroundColor: '#ffcccb', 
//                 borderRadius: '5px',
//                 opacity: 0.8,
//                 display: 'block',
//                 padding: '5px',
//                 fontSize: '0.8em', 
//               },
//             })}
//           />
//         </div>
//       </div>

      
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Select Students to Mark Absent</h2>
//             <Select
//               options={students.filter(student => !absentStudents.includes(student))}
//               value={selectedStudents}
//               onChange={setSelectedStudents}
//               isMulti
//               placeholder="Select students..."
//               className="basic-single mb-4"
//               classNamePrefix="select"
//             />
//             <h3 className="font-bold mb-2">Selected Students:</h3>
//             <ul className="list-disc list-inside mb-4">
//               {selectedStudents.map(student => (
//                 <li key={student.value}>{student.label}</li>
//               ))}
//             </ul>
//             <button
//               onClick={handleSaveAbsences}
//               className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
//             >
//               Save Absences
//             </button>
//             <button
//               onClick={() => setModalOpen(false)}
//               className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FullCalendar;









// test 1 chatgpt 


// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "tailwindcss/tailwind.css";

// const localizer = momentLocalizer(moment);

// const FullCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("Class A");
//   const [students] = useState([
//     { value: "Alice", label: "Alice" },
//     { value: "Bob", label: "Bob" },
//     { value: "Charlie", label: "Charlie" },
//     { value: "David", label: "David" },
//     { value: "Eva", label: "Eva" },
//   ]);
//   const [absentStudents, setAbsentStudents] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

//   const handleSelectSlot = ({ start }) => {
//     setSelectedTimeSlot(start);
//     setAttendance({});
//     setModalOpen(true);
//   };

//   const handleAttendanceChange = (student, status) => {
//     setAttendance((prev) => ({
//       ...prev,
//       [student]: status,
//     }));
//   };

//   const handleSaveAbsences = () => {
//     const absentList = Object.keys(attendance).filter(
//       (student) => attendance[student] === "A"
//     );

//     if (absentList.length === 0 || !selectedTimeSlot) {
//       alert("No absences marked or time slot not selected.");
//       return;
//     }

//     const confirmMessage = `Are you sure that these students are absent: ${absentList.join(
//       ", "
//     )}?`;
//     if (window.confirm(confirmMessage)) {
//       const newEvents = absentList.map((student) => ({
//         start: selectedTimeSlot,
//         end: moment(selectedTimeSlot).add(1, "hour").toDate(),
//         title: `${student} - Absent`,
//         allDay: false,
//       }));
//       setEvents((prevEvents) => [...prevEvents, ...newEvents]);
//       setAbsentStudents((prev) => [...prev, ...absentList]);
//       setModalOpen(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-white">Record Student Absences</h1>
//           <select
//             value={selectedClass}
//             onChange={(e) => setSelectedClass(e.target.value)}
//             className="bg-white p-2 rounded"
//           >
//             <option value="Class A">Class A</option>
//             <option value="Class B">Class B</option>
//             <option value="Class C">Class C</option>
//           </select>
//         </div>
//         <div className="p-4">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             onSelectEvent={(event) => alert(event.title)}
//             onSelectSlot={handleSelectSlot}
//             style={{ height: 500 }}
//             className="bg-white rounded-lg"
//             eventPropGetter={(event) => ({
//               style: {
//                 backgroundColor: "#ffcccb",
//                 borderRadius: "5px",
//                 opacity: 0.8,
//                 display: "block",
//                 padding: "5px",
//                 fontSize: "0.8em",
//               },
//             })}
//           />
//         </div>
//       </div>

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Select Students to Mark Absent</h2>
//             <ul className="space-y-4">
//               {students.map((student) => (
//                 <li key={student.value} className="flex items-center">
//                   <span className="mr-4 text-lg font-semibold">
//                     {student.label}
//                   </span>
//                   <button
//                     className={`p-2 rounded text-white mr-2 ${
//                       attendance[student.value] === "A"
//                         ? "bg-red-600"
//                         : "bg-gray-300"
//                     }`}
//                     onClick={() =>
//                       handleAttendanceChange(student.value, "A")
//                     }
//                   >
//                     A
//                   </button>
//                   <button
//                     className={`p-2 rounded text-white ${
//                       attendance[student.value] === "P"
//                         ? "bg-green-600"
//                         : "bg-gray-300"
//                     }`}
//                     onClick={() =>
//                       handleAttendanceChange(student.value, "P")
//                     }
//                   >
//                     P
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={handleSaveAbsences}
//               className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 mt-4"
//             >
//               Save Absences
//             </button>
//             <button
//               onClick={() => setModalOpen(false)}
//               className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FullCalendar;


// end test 1 chatgpt




// test 2 poe 

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import StudentModal from "./StudentModal";
import AbsentListModal from "./AbsentListModal";
import ConfirmationModal from "./ConfirmationModal"; // Import the confirmation modal
import "react-big-calendar/lib/css/react-big-calendar.css";
import "tailwindcss/tailwind.css";

const localizer = momentLocalizer(moment);

const FullCalendar = () => {
  const [absences, setAbsences] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAbsentList, setShowAbsentList] = useState(false);
  const [studentStatus, setStudentStatus] = useState({});
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedAbsentHour, setSelectedAbsentHour] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleSelectSlot = ({ start }) => {
    setSelectedTimeSlot(start);
    setModalOpen(true);
  };

  const handleSaveAbsences = () => {
    if (!selectedTimeSlot || selectedStudents.length === 0) return;

    const hourKey = moment(selectedTimeSlot).format('YYYY-MM-DD HH');

    const absentStudents = selectedStudents.filter(student => studentStatus[student.value] === 'absent').map(student => student.label);
    
    console.log("Saving absences for hour:", hourKey, "Absentees:", absentStudents); // Debugging line

    // Update the absences state
    setAbsences(prev => ({
      ...prev,
      [hourKey]: absentStudents // Store the list of absent students for this hour
    }));

    resetSelections();
  };

  const resetSelections = () => {
    setSelectedStudents([]);
    setStudentStatus({});
    setModalOpen(false);
  };

  const handleShowAbsentList = (hour) => {
    setSelectedAbsentHour(hour);
    setShowAbsentList(true);
  };

  const getAbsentStudentsForHour = (hour) => {
    console.log("Fetching absent students for hour:", hour, "=>", absences[hour]);
    return absences[hour] || [];
  };

  const renderEvent = (event) => (
    <div className="flex justify-center items-center">
      <button
        onClick={() => handleShowAbsentList(moment(event.start).format('YYYY-MM-DD HH'))}
        className="px-4 py-2 bg-mainColor text-white rounded hover:bg-secondColor"
      >
        Show Absents
      </button>
    </div>
  );

  const confirmAbsences = () => {
    handleSaveAbsences();
    setShowConfirmationModal(false);
  };

  return (
    
    <div className="flex flex-col items-center h-screen  p-4"> {/* bg-gradient-to-r from-secondColor  to-mainColor */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="p-4 border-b bg-gradient-to-r from-mainColor to-secondColor flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Record Student Absences</h1>
        </div>
        <div className="p-4">
          <Calendar
            localizer={localizer}
            events={Object.keys(absences).map(hour => ({
              start: moment(hour).toDate(),
              end: moment(hour).add(1, 'hour').toDate(),
              title: 'Show Absents',
            }))}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            style={{ height: 500 }}
            className="bg-white rounded-lg"
            components={{
              event: renderEvent,
            }}
          />
        </div>
      </div>

      <StudentModal
        isOpen={modalOpen}
        onClose={resetSelections}
        onSave={() => setShowConfirmationModal(true)} // Show confirmation modal on save
        studentStatus={studentStatus}
        setStudentStatus={setStudentStatus}
        selectedStudents={selectedStudents}
        setSelectedStudents={setSelectedStudents}
      />

      <AbsentListModal
        isOpen={showAbsentList}
        onClose={() => setShowAbsentList(false)}
        absentStudents={getAbsentStudentsForHour(selectedAbsentHour)}
      />

      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={confirmAbsences}
        onCancel={() => setShowConfirmationModal(false)}
        selectedStudents={selectedStudents}
        studentStatus={studentStatus}
      />
    </div>
  );
};

export default FullCalendar;

// end test 2 poe 











// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import Select from 'react-select';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "tailwindcss/tailwind.css";

// const localizer = momentLocalizer(moment); // Set the localizer for date handling

// const FullCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("Class A");
//   const [students] = useState([
//     { value: "Alice", label: "Alice" },
//     { value: "Bob", label: "Bob" },
//     { value: "Charlie", label: "Charlie" },
//     { value: "David", label: "David" },
//     { value: "Eva", label: "Eva" }
//   ]); // Example student list
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   const handleSelectSlot = ({ start }) => {
//     if (selectedStudents.length === 0) {
//       alert("Please select at least one student.");
//       return;
//     }

//     // Check for existing absences for selected students in the same hour
//     selectedStudents.forEach(student => {
//       const isDuplicate = events.some(event => {
//         return (
//           event.start.getTime() === start.getTime() && // Check if the exact time already exists
//           event.title.startsWith(student.value) // Ensure it’s the same student
//         );
//       });

//       if (!isDuplicate) {
//         const newEvent = {
//           start,
//           end: moment(start).add(1, 'hour').toDate(), // Set end time to one hour later
//           title: `${student.value} - Absent`,
//           allDay: false,
//         };
//         setEvents(prevEvents => [...prevEvents, newEvent]);
//       }
//     });

//     // Reset selections after saving
//     setSelectedStudents([]);
//   };

//   const handleClassChange = (e) => {
//     setSelectedClass(e.target.value);
//   };

//   const handleStudentChange = (selectedOptions) => {
//     setSelectedStudents(selectedOptions);
//   };

//   return (
//     <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-white">Calendrier des absences</h1>
//           <div className="flex items-center space-x-4">
//             <select value={selectedClass} onChange={handleClassChange} className="bg-white p-2 rounded">
//               <option value="Class A">Class A</option>
//               <option value="Class B">Class B</option>
//               <option value="Class C">Class C</option>
//               {/* Add more classes as needed */}
//             </select>
//             <Select
//               isMulti
//               options={students}
//               value={selectedStudents}
//               onChange={handleStudentChange}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select students..."
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   minWidth: '200px', // Set minimum width for better visibility
//                 }),
//               }}
//             />
//           </div>
//         </div>
//         <div className="p-4">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             onSelectEvent={(event) => alert(event.title)} // Display event details
//             onSelectSlot={handleSelectSlot} // Handle slot selection for absence
//             style={{ height: 500 }}
//             className="bg-white rounded-lg"
//             eventPropGetter={(event) => ({
//               style: {
//                 backgroundColor: '#ffcccb', // Light red color for absence
//                 borderRadius: '5px',
//                 opacity: 0.8,
//                 display: 'block',
//                 padding: '5px',
//                 fontSize: '0.8em', // Smaller font size
//               },
//             })}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullCalendar;