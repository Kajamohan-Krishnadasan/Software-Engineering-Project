import React from 'react';
import '../general.css';
import './StaffHomePage.css';
import logo from '../assets/logo.png';

const StaffHomePage = () => {
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    const Staff_Name = () =>{
        return "Staff";
    } 
    const Logout = ()=>{
        window.location.href='/'
    }

  return (
    <div className='main'>
        <div className='Background'>
            <div className='Header'>
                <img  src={logo} alt="University Logo"  className='Logo'/>
                <div className='title'>Welcome to Student Document Approval System </div> 
            </div>
            <div className='Main-Background'>
                <div className="Content-Background">
                    <div className="welcome-with-Logout-button">
                        <div className="Welcome-Name"> Welcome {Staff_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>
                    <button className="buttons-hover Buttons-Background Buttton-text Create-Document-Flow-Path">Create Document Flow Path</button>
                    <button className="buttons-hover Buttons-Background Buttton-text View-Request-button">View Requests <i className='Status Color-Green'></i></button>
                    <button className="buttons-hover Buttons-Background Buttton-text Approved-Request-button">Approved Requests<i className='Status Color-Blue'></i></button>
                    <button className="buttons-hover Buttons-Background Buttton-text Rejected-Request-button">Rejected Requests<i className='Status Color-Red'></i></button>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} UNIVERSITY OF JAFFNA.</div>
        </div>
    </div>
  )
}

export default StaffHomePage
