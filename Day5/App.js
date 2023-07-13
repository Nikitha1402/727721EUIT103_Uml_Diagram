import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
// import Navbar from './navbar/Navbar';
import  './App.css'
import Support from './support/Support'
import ActionAreaCard from './course/Card'
import Form from './contact/Contactus'
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    
   <Routes>
   <Route  path="/" element={<Home/>}></Route>

   <Route  path="/home" element={<Home/>}></Route>
   <Route  className='App' path="/login" element={<Login/>}></Route>
    <Route   path="/signup" element={<SignUp/>}></Route>
    <Route path="/not" element={<Support/>}></Route>
    <Route path='/course'element={<ActionAreaCard/>}></Route>
import Form from './contact/Contactus'
<Route path='/contact'element={<Form/>}></Route>
    
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;