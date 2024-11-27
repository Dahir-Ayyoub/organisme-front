import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "tailwindcss/tailwind.css";

const localizer = momentLocalizer(moment); // Set the localizer for date handling

const CheckAbsence = () => {
  const [events, setEvents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Class A");
  const [students] = useState(["Alice", "Bob", "Charlie"]); // Example student list
  const [studentName, setStudentName] = useState("");

  const handleSelectSlot = ({ start, end }) => {
    const reason = prompt("Enter reason for absence:");
    if (!reason) return;

    const newEvent = {
      start,
      end,
      title: `${studentName} - Absent: ${reason}`,
      allDay: true,
    };
    setEvents([...events, newEvent]);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500">
          <h1 className="text-3xl font-bold text-white">Student Absence Tracker</h1>
          <select value={selectedClass} onChange={handleClassChange} className="mt-2 bg-white p-2 rounded">
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
            {/* Add more classes as needed */}
          </select>
          <select
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-2 bg-white p-2 rounded"
          >
            <option value="">Select Student</option>
            {students.map((student) => (
              <option key={student} value={student}>{student}</option>
            ))}
          </select>
        </div>
        <div className="p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectEvent={(event) => alert(event.title)} // Handle event click
            onSelectSlot={handleSelectSlot} // Handle slot selection for absence
            style={{ height: 500 }}
            className="bg-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckAbsence;