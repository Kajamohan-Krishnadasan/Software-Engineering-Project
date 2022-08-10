import React from 'react'
import '../general.css'
import './LoginPage.css'
import logo from '../assets/logo.png'
import Login from '../Login/Login'

const LoginPage = () => {
    
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    
    const Student = ()=>{
        // window.location.href='/Login'
        let type = "Student"
        // let Username = "Naif"
        sessionStorage.setItem("type", type)
        // sessionStorage.setItem("Username", Username)
        bgHide();
      }
    
    const Academic_Staff = ()=>{
        // window.location.href='/Login'
        let type = "Academic Staff"
        // let Username = "Supun"
        sessionStorage.setItem("type", type)
        // sessionStorage.setItem("Username", Username)
        bgHide();
    }
    
    const Non_Academic_Staff = ()=>{
        // window.location.href='/Login'
        let type = "Non-Academic Staff"
        // let Username = "Kajamohan"
        sessionStorage.setItem("type", type)
        // sessionStorage.setItem("Username", Username)
        bgHide();
    }
    const bgHide=()=>{
      document.getElementById("Login-Popup").style="visibility: visible"
      
    }

    const TableDisplay = ()=>{
  return(
    <table className='login-table'>
          <tr>
            <th td className='th1'>Student</th>
            <th td className='th2'>Academic Staff</th>
            <th td className='th3'>Non-Academic Staff</th>
          </tr>

          <tr>
            
            <td className='odd'>Request Exam Reschedule</td>
            <td className='even'>Approve/Reject  Exam Reschedule</td>
            <td className='odd'>Approve/Reject  Exam Reschedule</td>
          </tr>

          <tr>
            <td className='even'>Request Exam Re-attempt</td>
            <td td className='odd'>Approve/Reject Exam Re-attempt</td>
            <td td className='even'>Approve/Reject Exam Re-attempt</td>
          </tr>
          <tr>
            <td className='odd'>Request Lab Reschedule</td>
            <td className='even'>Approve/Reject Lab Reschedule</td>
            <td td className='odd'>Sent Studentship Confirm Letter</td>
          </tr>
          <tr>
            <td className='even'>Request Studentship Confirm Letter</td>
            <td></td>
            <td className='even'>Sent Progress Report </td>
          </tr>
          <tr>
            <td className='odd'>Request Progress Report</td>
            <td></td>
            <td td className='odd'>Provide New University Student Record Book</td>
          </tr>
          
          <tr>
            <td className='even'>Request New University Student Record Book</td>
            <td></td>
            <td className='even'>Provide New University Student Identity Card</td>
          </tr>

          <tr>
            <td className='odd'>Request New University Student Identity Card</td>
            <td></td>
            
          </tr>
        </table>
  );
}

const hide_login =()=>{
  document.getElementById("Login-Popup").style="visibility: hidden"
    
}

  return (
    <div className='main' onLoad={hide_login}>
        <div className='Background'>
            <div className='Header'>
                <img  src={logo} alt="University Logo"  className='Logo'/>
                <div className='title'>Welcome to Student Document Approval System </div> 
            </div>
            <div className='Main-Background'>
                <div className="Content-Background bg">
                <div>
                <TableDisplay/>
                </div>   
                

                <button className="Sign-In-Button Button-1" onClick={Student}>Sign in as Student</button>
                <button className="Sign-In-Button Button-2" onClick={Academic_Staff}>Sign in as Academic Staff</button>
                <button className="Sign-In-Button Button-3" onClick={Non_Academic_Staff}>Sign in as Asst.Registrar</button>
                </div>

                <div  id='Login-Popup'> <Login/></div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
    </div>
  )
}

export default LoginPage
