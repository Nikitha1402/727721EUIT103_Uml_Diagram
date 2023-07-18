import React, { useState } from 'react';
import './Feesm.css';

const FeesManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', fees: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleAddStudent = () => {
    if (newStudent.name.trim() !== '' && newStudent.fees.trim() !== '') {
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setNewStudent({ name: '', fees: '' });
    }
  };

  const handleDeleteStudent = (index) => {
    setStudents((prevStudents) => {
      const updatedStudents = [...prevStudents];
      updatedStudents.splice(index, 1);
      return updatedStudents;
    });
  };

  return (
    <div>
    <div className='feed'>
      <h2 className='myse'>Fees Management</h2>
      <div className='feel'>
        <input
          type="text"
          name="name"
          value={newStudent.name}
          onChange={handleChange}
          placeholder="Student Name"
        />
        <br></br>
        <input
          type="text"
          name="fees"
          value={newStudent.fees}
          onChange={handleChange}
          placeholder="Fees Amount"
        />
        <button className='loo' onClick={handleAddStudent}>Add Student</button>
      </div>
      <div className='ter'>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Fees Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.fees}</td>
              <td>
                <button onClick={() => handleDeleteStudent(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default FeesManagement;
