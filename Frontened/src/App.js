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
import AttendanceApp from './attendence/Attendence';
import RegistrationForm from './register/Register';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
import FeesManagement from './fees/Feesm';
import About from './about/About';
import PersonalProfile from './profile/Profile';
import GmailLink from './time/Time';
import Navbar11 from './Componentcrud/NNavbar';
import Home11 from './Componentcrud/home2';
import AddProduct from './Componentcrud/AddProduct';
import EditProduct from './Componentcrud/EditProduct';
import Feedback from './feedback/Feedback';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    
   <Routes>
   <Route  path="/" element={<Login/>}></Route>

   <Route  path="/home" element={<Home/>}></Route>
   <Route  className='App' path="/login" element={<Login/>}></Route>
    <Route   path="/signup" element={<SignUp/>}></Route>
    <Route path="/support" element={<App3/>}></Route>
    <Route path='/course'element={<ActionAreaCard/>}></Route>
<Route path='/contact'element={<Form/>}></Route>
<Route path='/atten'element={<AttendanceApp/>}></Route>
<Route path='/regis'element={<RegistrationForm/>}></Route>
<Route path='/tasks'element={<FeesManagement/>}></Route>
<Route path='/about'element={<About/>}></Route>
<Route path='/feedback'element={<Feedback/>}></Route>
<Route path='/cal'element={<PersonalProfile/>}></Route>
<Route path='/time'element={<GmailLink/>}></Route>
<Route path='/records' element={<>
  <Navbar11/>
  <Home11/>
  </>}></Route>
<Route path='/addProduct' element={<>
<Navbar11/>
<AddProduct />
</>}></Route>
<Route path='/return' element={<>
<Navbar11/>
<Home11 />
</>}></Route>
<Route path='/editProduct/:id' element={<>
<Navbar11/>
<EditProduct />
</>}></Route>




    
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;