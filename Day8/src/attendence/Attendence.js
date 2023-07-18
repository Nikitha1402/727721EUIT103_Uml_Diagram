import React, { useState } from 'react';
import './Attendence.css';

const AttendanceManagement = () => {
  const [attendance, setAttendance] = useState([]);

  const handleAttendance = (event) => {
    const studentName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setAttendance([...attendance, studentName]);
    } else {
      setAttendance(attendance.filter((name) => name !== studentName));
    }
  };

  return (
    <div className="App">
      <h1 className='att'>Attendance Management System</h1>
      <div className="attendance-list">
        <div className="student">
          <input
            type="checkbox"
            id="student1"
            value="Vijay"
            onChange={handleAttendance}
          />
          <label htmlFor="student1">Vijay</label>
        </div>
        <div className="student">
          <input
            type="checkbox"
            id="student2"
            value="Siva"
            onChange={handleAttendance}
          />
          <label htmlFor="student2">Siva</label>
        </div>
        <div className="student">
          <input
            type="checkbox"
            id="student3"
            value="Dhanush"
            onChange={handleAttendance}
          />
          <label htmlFor="student3">Dhanush</label>
        </div>
        <div className="student">
        <input
          type="checkbox"
          id="student2"
          value=" Kanishka"
          onChange={handleAttendance}
        />
        <label htmlFor="student2">Kanishka</label>
      </div>
      </div>
      <h2 className='att2'>Attendance:</h2>
      <ul>
        {attendance.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceManagement;