import React, { useState } from 'react'
import '../general.css';
import './MakeRequest.css';
import logo from '../assets/logo.png';

const MakeRequest = () => {
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }

    const Student_Name = ()=>{
        return sessionStorage.getItem("Username")
    }

    const Logout = ()=>{
        window.location.href='/'
    }
    
    const Back = ()=>{
        window.location.href='/StudentHome'
    }

    const Submit_Request =(ReqName)=>{
        window.location.href='/StudentHome/MakeRequest/SubmitRequest'
        var RequestName = ReqName;
        sessionStorage.setItem("RequestName", RequestName)
    }
    const [RequestName, setRequestName] = useState("");
    const PopUp_Display = (e)=>{
        setRequestName(e);
        document.getElementById("Popup").style="visibility: visible"
       
    }
    const Hide_Popup =()=>{
        document.getElementById("Popup").style="visibility: hidden"
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
                        <button className='Home-Button buttons-hover' onClick={Back}> Home</button>
                    </div>

                    <div className="Request-Background a">
                        <span className='text'> Exam Reshedule</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Exam Reshedule")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Exam Reshedule")}>Request</button>
                    </div>
                    
                    <div className="Request-Background b">
                        <span className='text'> Exam Re-attempt</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Exam Re-attempt")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Exam Re-attempt")}>Request</button>
                    </div>

                    <div className="Request-Background c">
                        <span className='text'> Labratory Session Reshedule</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Labratory Session Reshedule")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Labratory Session Reshedule")}>Request</button>
                    </div>

                    <div className="Request-Background d">
                        <span className='text'> Requesting Studentship Confirmation Letter</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Requesting Studentship Confirmation Letter")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Requesting Studentship Confirmation Letter")}>Request</button>
                    </div>

                    <div className="Request-Background e">
                        <span className='text'> Requesting Progress Report</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Requesting Progress Report")}>Check Requirements</button>
                        <button className='Request A buttons-hover' onClick={()=>Submit_Request("Requesting Progress Report")} >Request</button>
                    </div>

                    <div className="Request-Background f">
                        <span className='text'> Requesting for New Student Record Book</span>
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Requesting for New Student Record Book")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Requesting New Student Record Book")}>Request</button>
                    </div>

                    <div className="Request-Background g">
                        <span className='text'> Requesting for New Student ID card</span> 
                        <button className='Check-Requirements A buttons-hover' onClick={() =>PopUp_Display("Requesting for New Student ID card")}>Check Requirements</button>
                        <button className='Request A buttons-hover'  onClick={()=>Submit_Request("Requesting New Student ID card")}>Request</button>
                    </div>
                    <div id='Popup'>
                    <h1>{RequestName}</h1>
                    <div id='Requirement-Details'> </div>
                    <button className='Popup-Close buttons-hover' onClick={Hide_Popup}>close</button>
                    </div>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default MakeRequest
