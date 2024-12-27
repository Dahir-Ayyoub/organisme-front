import React, { useState, useCallback, useEffect } from 'react';
import Calendar from './components/Calendar';
import AttendanceModal from './components/AttendanceModal';
import ConfirmationAlert from './components/ConfirmationAlert';
import AbsentStudentsModal from './components/AbsentStudentsModal';
import DailySummary from './components/DailySummary';
import SearchBar from './components/SearchBar';
import WeeklyOverview from './components/WeeklyOverview';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialAttendanceData = {
  // Simulated data structure: { [date]: { [studentId]: status } }
};

const students = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Ross' },
  { id: 5, name: 'Ethan Hunt' },
];

export default function TeacherDashboard() {
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isConfirmationAlertOpen, setIsConfirmationAlertOpen] = useState(false);
  const [isAbsentStudentsModalOpen, setIsAbsentStudentsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState(null);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAttendanceData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAttendanceData(initialAttendanceData);
    };
    fetchAttendanceData();
  }, []);

  const openAttendanceModal = useCallback((date, classInfo) => {
    setSelectedDate(date);
    setSelectedClass(classInfo);
    setIsAttendanceModalOpen(true);
  }, []);

  const closeAttendanceModal = useCallback(() => {
    setIsAttendanceModalOpen(false);
    setSelectedClass(null);
  }, []);

  const handleAttendanceSaved = useCallback((attendance) => {
    const dateString = selectedDate.toISOString().split('T')[0];
    const absentStudents = Object.entries(attendance)
      .filter(([_, status]) => status === 'absent')
      .map(([id]) => {
        const student = students.find(s => s.id.toString() === id);
        return { id, name: student ? student.name : 'Unknown Student' };
      });

    setAttendanceData(prev => ({
      ...prev,
      [dateString]: {
        ...(prev[dateString] || {}),
        ...attendance,
      },
    }));

    setAbsentStudents(absentStudents);
    setIsConfirmationAlertOpen(true);
  }, [selectedDate]);

  const finalizeAttendance = useCallback(() => {
    closeAttendanceModal();
    setIsConfirmationAlertOpen(false);
    toast.success('Attendance saved successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, [closeAttendanceModal]);

  const handleConfirmAbsences = useCallback(() => {
    finalizeAttendance();
  }, [finalizeAttendance]);

  const handleQuickAttendance = useCallback((date, studentId, status) => {
    const dateString = date.toISOString().split('T')[0];
    setAttendanceData(prev => ({
      ...prev,
      [dateString]: {
        ...(prev[dateString] || {}),
        [studentId]: status,
      },
    }));
    toast.success(`Quick attendance marked: ${status}`, { autoClose: 2000 });
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleShowAbsentStudents = useCallback((date) => {
    setSelectedDate(date);
    const dateString = date.toISOString().split('T')[0];
    const absentStudents = Object.entries(attendanceData[dateString] || {})
      .filter(([_, status]) => status === 'absent')
      .map(([id]) => {
        const student = students.find(s => s.id.toString() === id);
        return { id, name: student ? student.name : 'Unknown Student' };
      });
    setAbsentStudents(absentStudents);
    setIsAbsentStudentsModalOpen(true);
  }, [attendanceData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#1C3B6E] mb-8">Teacher Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <Calendar 
        openAttendanceModal={openAttendanceModal}
        attendanceData={attendanceData}
        onQuickAttendance={handleQuickAttendance}
        searchTerm={searchTerm}
        onShowAbsentStudents={handleShowAbsentStudents}
        className="w-full" // Ensure full width
      />
      <div className="space-y-8 mt-8"> {/* Add margin to separate from the Calendar */}
        <DailySummary 
          date={selectedDate} 
          attendanceData={attendanceData[selectedDate.toISOString().split('T')[0]] || {}}
          onOpenAbsentModal={() => setIsAbsentStudentsModalOpen(true)}
        />
        <WeeklyOverview attendanceData={attendanceData} />
      </div>
      <AttendanceModal 
        isOpen={isAttendanceModalOpen} 
        onClose={closeAttendanceModal} 
        onSave={handleAttendanceSaved}
        classInfo={selectedClass}
        date={selectedDate}
        initialAttendance={attendanceData[selectedDate.toISOString().split('T')[0]] || {}}
        students={students}
      />
      <ConfirmationAlert
        isOpen={isConfirmationAlertOpen}
        onClose={() => setIsConfirmationAlertOpen(false)}
        onConfirm={handleConfirmAbsences}
        absentStudents={absentStudents}
      />
      <AbsentStudentsModal
        isOpen={isAbsentStudentsModalOpen}
        onClose={() => setIsAbsentStudentsModalOpen(false)}
        absentStudents={absentStudents}
        date={selectedDate}
        onStatusChange={handleQuickAttendance}
      />
      <ToastContainer />
    </div> 
  );
}