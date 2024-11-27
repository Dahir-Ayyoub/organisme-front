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








// new idea 
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Select from 'react-select';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "tailwindcss/tailwind.css";

const localizer = momentLocalizer(moment); // Set the localizer for date handling

const FullCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Class A");
  const [students] = useState([
    { value: "Alice", label: "Alice" },
    { value: "Bob", label: "Bob" },
    { value: "Charlie", label: "Charlie" },
    { value: "David", label: "David" },
    { value: "Eva", label: "Eva" }
  ]); // Example student list
  const [absentStudents, setAbsentStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedTimeSlot(start);
    setModalOpen(true);
  };

  const handleSaveAbsences = () => {
    if (!selectedTimeSlot || selectedStudents.length === 0) return;

    selectedStudents.forEach(student => {
      const isDuplicate = events.some(event => {
        return (
          event.start.getTime() === selectedTimeSlot.getTime() && 
          event.title.startsWith(student.label)
        );
      });

      if (!isDuplicate) {
        const newEvent = {
          start: selectedTimeSlot,
          end: moment(selectedTimeSlot).add(1, 'hour').toDate(),
          title: `${student.label} - Absent`,
          allDay: false,
        };
        setEvents(prevEvents => [...prevEvents, newEvent]);
      }
    });

    setAbsentStudents([...absentStudents, ...selectedStudents]); // Update absent students
    setSelectedStudents([]); // Clear selected students after saving
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Record Student Absences</h1>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="bg-white p-2 rounded">
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
            {/* Add more classes as needed */}
          </select>
        </div>
        <div className="p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectEvent={(event) => alert(event.title)} // Display event details
            onSelectSlot={handleSelectSlot} // Handle slot selection for absence
            style={{ height: 500 }}
            className="bg-white rounded-lg"
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: '#ffcccb', // Light red color for absence
                borderRadius: '5px',
                opacity: 0.8,
                display: 'block',
                padding: '5px',
                fontSize: '0.8em', // Smaller font size
              },
            })}
          />
        </div>
      </div>

      {/* Modal for selecting students */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Select Students to Mark Absent</h2>
            <Select
              options={students.filter(student => !absentStudents.includes(student))}
              value={selectedStudents}
              onChange={setSelectedStudents}
              isMulti
              placeholder="Select students..."
              className="basic-single mb-4"
              classNamePrefix="select"
            />
            <h3 className="font-bold mb-2">Selected Students:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedStudents.map(student => (
                <li key={student.value}>{student.label}</li>
              ))}
            </ul>
            <button
              onClick={handleSaveAbsences}
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Save Absences
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullCalendar;















// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css"; // Keep this for default styles
// import "tailwindcss/tailwind.css"; // Ensure Tailwind is imported

// const localizer = momentLocalizer(moment); // Set the localizer for date handling

// const FullCalendar = () => {
//   const [events, setEvents] = useState([
//     {
//       start: new Date(2024, 11, 1, 10, 0), // December 1, 2024, 10:00 AM
//       end: new Date(2024, 11, 1, 12, 0), // December 1, 2024, 12:00 PM
//       title: "Sample Event",
//     },
//     // Add more events as needed
//   ]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500">
//           <h1 className="text-3xl font-bold text-white"> Calendrier des absences</h1>
//         </div>
//         <div className="p-4">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             onSelectEvent={(event) => alert(event.title)} // Handle event click
//             onSelectSlot={(slotInfo) => alert(`Selected slot: \n\n${slotInfo.start.toLocaleString()} - ${slotInfo.end.toLocaleString()}`)}
//             style={{ height: 500 }} // Keep height here for Big Calendar
//             className="bg-white rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullCalendar;










// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import Card from "components/card";
// import "react-calendar/dist/Calendar.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import "assets/css/MiniCalendar.css";

// const FullCalendar = () => {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Card extra="flex w-full h-full flex-col px-3 py-3">
//         <div className="w-96 h-auto"> 
//           <Calendar
//             onChange={onChange}
//             value={value}
//             prevLabel={<MdChevronLeft className="ml-1 h-6 w-6" />}
//             nextLabel={<MdChevronRight className="ml-1 h-6 w-6" />}
//             view={"month"}
//           />
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default FullCalendar;