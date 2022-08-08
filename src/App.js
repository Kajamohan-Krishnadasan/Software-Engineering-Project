import React from 'react';
import './App.css';

import  LoginPage from './Components/Pages/LoginPage';
import StaffHomePage from './Components/users/StaffHomePage';
import  StudentHomePage from './Components/users/StudentHomePage';
import MakeRequest from './Components/Pages/MakeRequest';
import WorkFlow from './Components/Pages/CreateDocumentFlow';
import Path from './Components/Pages/Path';
import AproversPage from './Components/users/AproversPage';
import SubmitRequest from './Components/Pages/SubmitRequest';
import StatusRequest from './Components/Pages/StatusRequest';


import {Route, BrowserRouter, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LoginPage/>}/>

            {/* Student */}
            <Route path='/StudentHome' element={<StudentHomePage/>}/>
            <Route path='/StudentHome/MakeRequest' element={<MakeRequest/>}/>
            <Route path='/StudentHome/MakeRequest/SubmitRequest' element={<SubmitRequest/>}/>

            {/* Academic Staff */}
            <Route path='/AproversPage' element={<AproversPage/>}/>

            {/* Non-Academic Staff */}
            <Route path='/StaffHome' element={<StaffHomePage/>}/>
            <Route path='/StaffHome/SetWorkFlow' element={<WorkFlow/>}/>
            <Route path='/StaffHome/SetWorkFlow/Path' element={<Path/>}/>
            
            {/* Ongoing Request / Approved Request / Rejected Request */}
            
            <Route path='/StatusRequest' element={<StatusRequest/>}/>

          </Routes>
        </BrowserRouter>   
    </div>
  )
}

export default App
