import React, { useState,useEffect } from 'react';
import './Feesm.css';
import axios from 'axios';

const FeesManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', fees: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleAddStudent = () => {
    if (newStudent.name.trim() !== '' && newStudent.fees.trim() !== '') {
      axios.post('http://127.0.0.1:8080/post', newStudent)
        .then(response => {
          // Assuming the backend returns the updated list of students after successful addition
          setStudents(response.data);
          setNewStudent({ name: '', fees: '' });
        })
        .catch(error => console.error('Error adding student:', error));
    }
  };
  

  const handleUpdateStudent = (index) => {
    if (newStudent.name.trim() !== '' && newStudent.fees.trim() !== '') {
      const updatedStudent = students[index];
      axios.put('http://127.0.0.1:8080/UpdateDetails', newStudent)
        .then(response => {
          setStudents(prevStudents => {
            const updatedStudents = [...prevStudents];
            updatedStudents[index] = response.data;
            return updatedStudents;
          });
          setEditIndex(-1);
          setNewStudent({ name: '', fees: '' });
        })
        .catch(error => console.error('Error updating student:', error));
    }
  };

  

  const handleDeleteStudent = (index) => {
    const studentToDelete = students[index];
    axios.delete('http://127.0.0.1:8080/Delete/{name}')
      .then(() => {
        setStudents(prevStudents => {
          const updatedStudents = [...prevStudents];
          updatedStudents.splice(index, 1);
          return updatedStudents;
        });
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

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
          {editIndex === -1 ? (
            <button className='loo' onClick={handleAddStudent}>Add Student</button>
          ) : (
            <button className='loo' onClick={() => handleUpdateStudent(editIndex)}>Update Student</button>
          )}
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
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="name"
                        value={newStudent.name}
                        onChange={handleChange}
                      />
                    ) : (
                      student.name
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="fees"
                        value={newStudent.fees}
                        onChange={handleChange}
                      />
                    ) : (
                      student.fees
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button onClick={() => handleUpdateStudent(index)}>Save</button>
                        <button onClick={() => setEditIndex(-1)}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => setEditIndex(index)}>Update</button>
                    )}
                    <button onClick={() => handleDeleteStudent(index)}>Delete</button>
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
