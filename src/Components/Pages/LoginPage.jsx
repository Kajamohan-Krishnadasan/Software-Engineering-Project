import React from 'react'
import '../general.css';
import './LoginPage.css';
import logo from '../assets/logo.png';

const LoginPage = () => {
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    const Load_Microsoft_Page = ()=>{
        window.location.href='/StudentHome';
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
                   
                    

                    <button className="Sign-In-Button" onClick={Load_Microsoft_Page}>Sign in with Microsoft</button>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} UNIVERSITY OF JAFFNA.</div>
        </div>
    </div>
  )
}

export default LoginPage
