import React from 'react'
import '../general.css';
import logo from '../assets/logo.png';

const MakeRequest = () => {
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }

    const Student_Name = ()=>{
        return "Student";
    }

    const Logout = ()=>{
        window.location.href='/'
    }
    const Back = ()=>{
        window.location.href='/StudentHome'
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
                        <div className="Welcome-Name"> Welcome {Student_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>
                    <button onClick={Back}> Home</button>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} UNIVERSITY OF JAFFNA.</div>
        </div>
        
    </div>
  )
}

export default MakeRequest
