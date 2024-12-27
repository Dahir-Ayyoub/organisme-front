// import React from 'react';
// import { Book, Calendar, Clock, CheckCircle } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Progress } from "@/components/ui/progress";

// const StudentDashboard = () => {
//   const upcomingAssignments = [
//     { subject: 'Math', title: 'Algebra Quiz', dueDate: '2023-05-20' },
//     { subject: 'English', title: 'Essay on Shakespeare', dueDate: '2023-05-22' },
//     { subject: 'Science', title: 'Lab Report', dueDate: '2023-05-25' },
//   ];

//   const attendanceData = {
//     present: 45,
//     absent: 3,
//     total: 48,
//   };

//   const recentGrades = [
//     { subject: 'History', assignment: 'World War II Essay', grade: 'A-' },
//     { subject: 'Physics', assignment: 'Forces Quiz', grade: 'B+' },
//     { subject: 'Literature', assignment: 'Book Report', grade: 'A' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>

//       <div className="grid md:grid-cols-3 gap-6 mb-8">
//         <Card>
//           <CardHeader>
//             <CardTitle>Upcoming Assignments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {upcomingAssignments.map((assignment, index) => (
//                 <li key={index} className="flex justify-between items-center">
//                   <div>
//                     <p className="font-semibold">{assignment.subject}</p>
//                     <p className="text-sm text-gray-500">{assignment.title}</p>
//                   </div>
//                   <Badge>{assignment.dueDate}</Badge>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Attendance</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="mb-4">
//               <Progress value={(attendanceData.present / attendanceData.total) * 100} />
//             </div>
//             <p className="text-center">
//               <span className="font-semibold">{attendanceData.present}</span> days present out of{' '}
//               <span className="font-semibold">{attendanceData.total}</span> total days
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Quick Actions</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-2 gap-4">
//             <Button variant="outline" className="flex flex-col items-center justify-center h-24">
//               <Book className="mb-2" size={24} />
//               View Courses
//             </Button>
//             <Button variant="outline" className="flex flex-col items-center justify-center h-24">
//               <Calendar className="mb-2" size={24} />
//               Schedule
//             </Button>
//             <Button variant="outline" className="flex flex-col items-center justify-center h-24">
//               <Clock className="mb-2" size={24} />
//               Timetable
//             </Button>
//             <Button variant="outline" className="flex flex-col items-center justify-center h-24">
//               <CheckCircle className="mb-2" size={24} />
//               Submit Work
//             </Button>
//           </CardContent>
//         </Card>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Grades</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Subject</TableHead>
//                 <TableHead>Assignment</TableHead>
//                 <TableHead>Grade</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {recentGrades.map((grade, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{grade.subject}</TableCell>
//                   <TableCell>{grade.assignment}</TableCell>
//                   <TableCell>{grade.grade}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default StudentDashboard;