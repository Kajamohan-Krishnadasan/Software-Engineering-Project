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
        sessionStorage.setItem("type", type)
    }
    
    const Academic_Staff = ()=>{
        window.location.href='/AproversPage';
    }
    
    const Non_Academic_Staff = ()=>{
        window.location.href='/StaffHome';

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
                   
                

                <button className="Sign-In-Button Button-1" onClick={Student}>Sign in as Student</button>
                <button className="Sign-In-Button Button-2" onClick={Academic_Staff}>Sign in as Academic Staff</button>
                <button className="Sign-In-Button Button-3" onClick={Non_Academic_Staff}>Sign in as Asst.Registrar</button>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
    </div>
  )
}

export default LoginPage
