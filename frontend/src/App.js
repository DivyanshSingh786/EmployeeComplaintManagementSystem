import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './component/Auth';
import OTP from './component/Auth/OTP';
import ForgetPassword from './component/Auth/ForgetPassword';
import ResetPassword from './component/Auth/ResetPassword';
function App() {
  let email = localStorage.getItem('email');
  console.log(email);
  return (
    <>
      <Router>
        <Routes>
          {/* {email&&
            <Route path='/' element={<div>LoggedIN  Hello World</div>} />
          } */}
          <Route path='/' element={<Auth />} />
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/otp' element={<OTP />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
