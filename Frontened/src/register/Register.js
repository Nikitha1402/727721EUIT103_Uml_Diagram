import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './Register.css';
// import { reserveTable } from '../store';
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [firstname, setfName] = useState('');
  const [lastname, setlName] = useState('');
  // const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  

 

  // e.preventDefault();
    const handleSubmit = (e) => {
      const data1 =
      {
     
        firstname:firstname,
        lastname:lastname,
        email:email,
        address:address,
        phoneno:phoneno,
        college:college,
        course:course
       
      };
      axios.post('http://localhost:8082/post',data1);
      alert("REGISTERED")
    }
  

  return (
    
    <div className='he1'>
     
      
    <div className='app6'>
     
      <h1 className='h1reg'>Registration Form</h1>

     
    <div className='bod9'>
    <form className="reservation-form">
      <div className='clr'>
  
      <div className="form-group">
      <label >FirstName :-</label>
        <input
          type="text"
          id="name"
          value={firstname}
          placeholder='First Name'
          onChange={(e) => setfName(e.target.value)}
          required
        />
        
      </div>
      <div className="form-group">
        <label >LastName </label>
        <input
          type="text"
          id="lastname"
          placeholder='LastName'
          value={lastname}
          onChange={(e) => setlName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label >Email<br/></label>
        <input
          type="email"
          id="Email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label ><br/>Address</label>
        <input
          type="text"
          id="address"
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label ><br/>Phoneno</label>
        <input
          type="Integer"
          id="phoneno"
          placeholder='PhoneNumber'
          value={phoneno}
          onChange={(e) => setPhoneno(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label >COLLEGE </label>
        <input
          type="text"
          id="college"
          placeholder='college'
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label >COURSE </label>
        <input
          type="text"
          id="course"
          placeholder='course'
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      
      <br></br>
      <div className="form-group">
      <div className="reg">
        <button type="submit"  onClick={handleSubmit}>Register</button>
        </div>
      </div>
      </div>
    </form>
  <br/><br/>
    </div>
    </div>
    </div>
  );
  };

export default RegistrationForm;