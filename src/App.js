import React from 'react';
import './App.css';

import  LoginPage from './Components/Pages/LoginPage';
import StaffHomePage from './Components/users/StaffHomePage';
import  StudentHomePage from './Components/users/StudentHomePage';
import MakeRequest from './Components/Pages/MakeRequest';

import {Route, BrowserRouter, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<div className='BGround'><Header/> <Login/><Footer/></div>}/> */}
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/StudentHome' element={<StudentHomePage/>}/>
            <Route path='/StaffHome' element={<StaffHomePage/>}/>
            <Route path='/StudentHome/MakeRequest' element={<MakeRequest/>}/>
          </Routes>
        </BrowserRouter>   
    </div>
  )
}

export default App
