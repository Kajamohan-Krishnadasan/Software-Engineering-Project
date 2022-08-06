import React from 'react'
import './general.css';
import logo from './assets/logo.png';

const General = () => {
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
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default General
