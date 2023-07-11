import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login'
// import LoginForm from './login/LoginForm'
import './app.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route  path="/" element={<SignUp/>}></Route>
    <Route  className='App' path="/login" element={<Login/>}></Route>
    
    
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;