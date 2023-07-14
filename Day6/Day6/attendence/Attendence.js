import React, { useState } from 'react';

const AttendanceManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', attendance: false },
    { id: 2, name: 'Jane Smith', attendance: false },
    // Add more students as needed
  ]);

  const handleAttendanceChange = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { ...student, attendance: !student.attendance };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Student Attendance Management</h1>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={student.attendance}
                    onChange={() => handleAttendanceChange(student.id)}
                  />
                  Present
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceManagement;
