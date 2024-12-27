import React, { useState } from 'react';
import { ChevronDown, Upload, Calendar, Eye, MessageSquare, FileText, Clock } from 'lucide-react';

const ClassManagementPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const students = [
    { name: 'John Doe', attendance: 95, lastGraded: 'Essay on Climate Change' },
    { name: 'Jane Smith', attendance: 88, lastGraded: 'Math Quiz #3' },
    { name: 'Bob Johnson', attendance: 92, lastGraded: 'History Presentation' },
  ];

  const upcomingClasses = [
    { id: 1, title: 'Cell Biology', time: '09:00 AM', date: 'Mon, May 15', status: 'Upcoming' },
    { id: 2, title: 'Genetics', time: '11:00 AM', date: 'Wed, May 17', status: 'Upcoming' },
    { id: 3, title: 'Ecology', time: '02:00 PM', date: 'Fri, May 19', status: 'Canceled' },
    { id: 4, title: 'Evolution', time: '10:00 AM', date: 'Mon, May 22', status: 'Upcoming' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Advanced Biology</h1>
        <p className="text-xl text-gray-600">Science - Class Code: BIO101</p>
      </header>

      {/* Upcoming Classes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingClasses.map((cls) => (
            <div key={cls.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{cls.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  cls.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {cls.status}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock size={16} className="mr-2" />
                <span>{cls.time}</span>
              </div>
              <div className="text-gray-600 mb-4">{cls.date}</div>
              <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Manage Materials Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manage Materials</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center mb-4">
            <Upload className="mr-2" size={20} />
            Upload
          </button>
          <a href="#" className="text-blue-500 hover:underline">View All Uploaded Materials</a>
        </div>

        {/* Schedule an Event Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Schedule an Event</h2>
          <p className="mb-4">Schedule a test, parent-teacher meeting, or a special event.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Calendar className="mr-2" size={20} />
            Schedule Now
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-6 bg-gray-50 border-b">Students Enrolled</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-4">Student Name</th>
              <th className="text-left p-4">Attendance %</th>
              <th className="text-left p-4">Last Graded Assignment</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.attendance}%</td>
                <td className="p-4">{student.lastGraded}</td>
                <td className="p-4">
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      Actions
                      <ChevronDown size={20} className="ml-1" />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                          <Eye size={16} className="mr-2" /> View Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                          <MessageSquare size={16} className="mr-2" /> Send Message
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                          <FileText size={16} className="mr-2" /> Add Note
                        </a>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassManagementPage;