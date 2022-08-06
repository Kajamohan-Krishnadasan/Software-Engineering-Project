import React from 'react';
import './App.css';

import  LoginPage from './Components/Pages/LoginPage';
import StaffHomePage from './Components/users/StaffHomePage';
import  StudentHomePage from './Components/users/StudentHomePage';
import MakeRequest from './Components/Pages/MakeRequest';
import WorkFlow from './Components/Pages/CreateDocumentFlow';
import Path from './Components/Pages/Path';

import {Route, BrowserRouter, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LoginPage/>}/>
            <Route path='/StudentHome' element={<StudentHomePage/>}/>
            <Route path='/StaffHome' element={<StaffHomePage/>}/>
            <Route path='/StudentHome/MakeRequest' element={<MakeRequest/>}/>
            <Route path='/StaffHome/SetWorkFlow' element={<WorkFlow/>}/>
            <Route path='/StaffHome/SetWorkFlow/Path' element={<Path/>}/>
            
          </Routes>
        </BrowserRouter>   
    </div>
  )
}

export default App
