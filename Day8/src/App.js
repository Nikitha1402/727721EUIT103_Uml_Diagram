import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
// import Navbar from './navbar/Navbar';
import  './App.css'
import App3 from './support/Support'
import ActionAreaCard from './course/Card'
import Form from './contact/Contactus'
import AttendanceManagement from './attendence/Attendence';
import RegistrationForm from './register/Register';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
import FeesManagement from './fees/Feesm';
import About from './about/About';
import PersonalProfile from './profile/Profile';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    
   <Routes>
   <Route  path="/" element={<Home/>}></Route>

   <Route  path="/home" element={<Home/>}></Route>
   <Route  className='App' path="/login" element={<Login/>}></Route>
    <Route   path="/signup" element={<SignUp/>}></Route>
    <Route path="/support" element={<App3/>}></Route>
    <Route path='/course'element={<ActionAreaCard/>}></Route>
<Route path='/contact'element={<Form/>}></Route>
<Route path='/atten'element={<AttendanceManagement/>}></Route>
<Route path='/regis'element={<RegistrationForm/>}></Route>
<Route path='/tasks'element={<FeesManagement/>}></Route>
<Route path='/about'element={<About/>}></Route>
<Route path='/cal'element={<PersonalProfile/>}></Route>



    
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;