import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
// import './assets/css/student.css';
import '../../assets/css/studentdash.css'

function StudentDash() {
  return (
<div className="bg-gray-100 min-h-screen p-8">
      <StudentDashboard />
    </div>  );
}

export default StudentDash;

