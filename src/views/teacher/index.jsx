import React, { useState } from 'react';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { Button } from './components/Button';
import { Table } from './components/Table';
import { DropdownMenu } from './components/DropdownMenu';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ClassManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const students = [
    { id: 1, name: 'John Doe', attendance: 95, lastGraded: 'Essay on Climate Change', absences: 2, grade: 'A' },
    { id: 2, name: 'Jane Smith', attendance: 88, lastGraded: 'Math Quiz #3', absences: 5, grade: 'B+' },
    { id: 3, name: 'Bob Johnson', attendance: 92, lastGraded: 'History Presentation', absences: 3, grade: 'A-' },
    { id: 4, name: 'Alice Brown', attendance: 97, lastGraded: 'Science Lab Report', absences: 1, grade: 'A+' },
    { id: 5, name: 'Charlie Davis', attendance: 85, lastGraded: 'Literature Essay', absences: 6, grade: 'B' },
  ];

  const upcomingClasses = [
    { id: 1, title: 'Physiques', time: '09:00 AM', date: 'Mon, May 15', status: 'Upcoming' },
    { id: 2, title: 'Science de Vie et Terre', time: '11:00 AM', date: 'Wed, May 17', status: 'Upcoming' },
    { id: 3, title: 'Math', time: '02:00 PM', date: 'Fri, May 19', status: 'Canceled' },
    { id: 4, title: 'Anglais', time: '10:00 AM', date: 'Mon, May 22', status: 'Upcoming' },
  ];

  const assignments = [
    { id: 1, title: 'Research Paper on Genetic Engineering', dueDate: '2023-05-20', status: 'Active' },
    { id: 2, title: 'Lab Report: DNA Extraction', dueDate: '2023-05-25', status: 'Active' },
    { id: 3, title: 'Group Presentation: Ecosystems', dueDate: '2023-06-01', status: 'Active' },
    { id: 4, title: 'Quiz: Cell Structure and Function', dueDate: '2023-05-18', status: 'Completed' },
  ];

  const resources = [
    { id: 1, title: 'Introduction to Biology Textbook', type: 'Book', link: '#' },
    { id: 2, title: 'Cell Division Video Lecture', type: 'Video', link: '#' },
    { id: 3, title: 'Genetic Inheritance Worksheet', type: 'Document', link: '#' },
    { id: 4, title: 'Virtual Lab: Photosynthesis', type: 'Interactive', link: '#' },
  ];

  const attendanceData = [
    { name: 'Week 1', attendance: 95 },
    { name: 'Week 2', attendance: 92 },
    { name: 'Week 3', attendance: 88 },
    { name: 'Week 4', attendance: 90 },
    { name: 'Week 5', attendance: 93 },
  ];

  const gradeDistribution = [
    { name: 'A', value: 8 },
    { name: 'B', value: 10 },
    { name: 'C', value: 5 },
    { name: 'D', value: 2 },
    { name: 'F', value: 1 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Advanced Biology</h1>
        <p className="text-xl text-gray-600">Science - Class Code: BIO101</p>
      </header>

      <nav className="mb-8">
        <ul className="flex border-b">
          {['Overview', 'Students', ].map((tab) => (
            // 'Assignments', 'Resources'
            <li key={tab} className="-mb-px mr-1">
              <Button
                className={`py-2 px-4 ${activeTab === tab.toLowerCase() ? 'border-l border-t border-r rounded-t text-blue-700' : 'text-blue-500 hover:text-blue-800'}`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === 'overview' && (
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingClasses.map((cls) => (
                <Card key={cls.id}>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{cls.title}</h3>
                    <Badge variant={cls.status === 'Upcoming' ? 'default' : 'destructive'}>
                      {cls.status}
                    </Badge>
                    <div className="flex items-center text-gray-600 my-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{cls.time}</span>
                    </div>
                    <div className="text-gray-600 mb-4">{cls.date}</div>
                    <Button className="w-full">View Details</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Class Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Attendance Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={attendanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="attendance" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              <Card>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Grade Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={gradeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {gradeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </section>
        </>
      )}

      {activeTab === 'students' && (
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Students Enrolled</h2>
            <Table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Grade</th>
                  <th>Attendance %</th>
                  <th>Absences</th>
                  <th>Last Graded Assignment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.attendance}%</td>
                    <td>{student.absences}</td>
                    <td>{student.lastGraded}</td>
                    <td>
                      <DropdownMenu
                        items={[
                          { icon: 'eye', label: 'View Profile' },
                          { icon: 'message-square', label: 'Send Message' },
                          { icon: 'file-text', label: 'Add Note' },
                          { icon: 'user-check', label: 'Mark Present' },
                          { icon: 'user-x', label: 'Mark Absent' },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      )}

      {activeTab === 'assignments' && (
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Assignments</h2>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td>{assignment.title}</td>
                    <td>{assignment.dueDate}</td>
                    <td>
                      <Badge variant={assignment.status === 'Active' ? 'default' : 'outline'}>
                        {assignment.status}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="outline" className="mr-2">Edit</Button>
                      <Button variant="outline">View Submissions</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button className="mt-4">Create New Assignment</Button>
          </div>
        </Card>
      )}

      {activeTab === 'resources' && (
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Class Resources</h2>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.id}>
                    <td>{resource.title}</td>
                    <td>{resource.type}</td>
                    <td>
                      <Button variant="outline" className="mr-2">View</Button>
                      <Button variant="outline">Download</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button className="mt-4">Add New Resource</Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ClassManagement;