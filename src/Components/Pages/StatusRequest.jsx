import React from 'react'
import '../general.css'
import './StatusRequest.css'
import logo from '../assets/logo.png'

const StatusRequest = () => {
    let StatusType = sessionStorage.getItem("StatusType");
    let MainHome = sessionStorage.getItem("MainHome");


    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    const Set_Name = () =>{
        return "name";
    } 
    
    const Logout = ()=>{
        window.location.href='/'
    }
    const Home = ()=>{
        window.location.href='/'+ MainHome
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
                        <div className="Welcome-Name"> Welcome {Set_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>
                    <button className='Home-Button buttons-hover' onClick={Home}> Home</button>
                    <h1 className='Status-Heading'>{StatusType} </h1>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default StatusRequest
