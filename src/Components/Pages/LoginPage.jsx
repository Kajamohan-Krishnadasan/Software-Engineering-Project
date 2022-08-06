import React from 'react'
import '../general.css'
import './LoginPage.css'
import logo from '../assets/logo.png'

const LoginPage = () => {
    
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    
    const Student = ()=>{
        window.location.href='/StudentHome';
        let type = "Student";
        sessionStorage.setItem("PathName", type)
    }
    
    const Academic_Staff = ()=>{
        window.location.href='/StaffHome';
        let type = "Academic_Staff";
        sessionStorage.setItem("PathName", type)
    }
    
    const Non_Academic_Staff = ()=>{
        window.location.href='/StaffHome';
        let type = "Non_Academic_Staff";
        sessionStorage.setItem("PathName", type)

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
                   
                

                <button className="Sign-In-Button" onClick={Student}>Sign in with Microsoft</button>
                <button className="Sign-In-Button" onClick={Academic_Staff}>Sign in with Microsoft</button>
                <button className="Sign-In-Button" onClick={Non_Academic_Staff}>Sign in with Microsoft</button>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
    </div>
  )
}

export default LoginPage
