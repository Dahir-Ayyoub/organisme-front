import React, { useState } from "react";
import students from '../variables/students'; // Ensure this path is correct

const StudentModal = ({ isOpen, onClose, onSave, studentStatus, setStudentStatus, selectedStudents, setSelectedStudents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const studentsPerPage = 10;
  const filteredStudents = students.filter(student =>
    student.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const paginatedStudents = filteredStudents.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage(prev => {
      if (direction === "next" && prev < totalPages - 1) return prev + 1;
      if (direction === "prev" && prev > 0) return prev - 1;
      return prev;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-auto max-h-[80vh] overflow-auto">
        <h2 className="text-lg font-bold mb-4">Select Students to Mark Absent</h2>
        <input
          type="text"
          placeholder="Search Students"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="space-y-4">
          {paginatedStudents.map(student => (
            <div key={student.value} className="flex items-center justify-between">
              <span className="mr-4">{student.label}</span>
              <div>
                <button
                  onClick={() => {
                    setStudentStatus(prev => ({ ...prev, [student.value]: 'absent' }));
                    setSelectedStudents(prev => {
                      const updated = [...prev];
                      if (!updated.find(s => s.value === student.value)) {
                        updated.push(student);
                      }
                      return updated;
                    });
                  }}
                  className={`rounded px-4 py-2 mr-2 transition duration-200 ${studentStatus[student.value] === 'absent' ? "bg-red-600 text-white" : "bg-red-300 text-black"}`}
                >
                  A
                </button>
                <button
                  onClick={() => {
                    setStudentStatus(prev => ({ ...prev, [student.value]: 'present' }));
                    setSelectedStudents(prev => {
                      const updated = [...prev];
                      const index = updated.findIndex(s => s.value === student.value);
                      if (index !== -1) {
                        updated.splice(index, 1);
                      }
                      return updated;
                    });
                  }}
                  className={`rounded px-4 py-2 transition duration-200 ${studentStatus[student.value] === 'present' ? "bg-green-600 text-white" : "bg-green-300 text-black"}`}
                >
                  P
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <button
          onClick={onSave}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 mt-4"
        >
          Save Absences
        </button>
        <button
          onClick={onClose}
          className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StudentModal;