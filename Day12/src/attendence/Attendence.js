import React, { useState } from 'react';
import './Attendence.css';

const AttendanceApp = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [name, setName] = useState('');
  const [isPresent, setIsPresent] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIsPresentChange = (event) => {
    setIsPresent(event.target.checked);
  };

  const handleAddAttendance = () => {
    const newAttendance = {
      name: name,
      isPresent: isPresent,
    };
    setAttendanceList([...attendanceList, newAttendance]);
    setName('');
    setIsPresent(true);
  };

  return (
    <div className='app9'>
    <div>
      <h2 className='te'>Attendance Details</h2>
      <div>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Name" />
        <label>
          <input type="checkbox" checked={isPresent} onChange={handleIsPresentChange} />
          Present
        </label>
        <button onClick={handleAddAttendance}>Add Attendance</button>
      </div>
      <div>
        <h3>Attendance List</h3>
        <ul>
          {attendanceList.map((attendance, index) => (
            <li key={index}>
              {attendance.name} - {attendance.isPresent ? 'Present' : 'Absent'}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AttendanceApp;
