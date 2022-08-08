import React, { useState } from 'react'
import '../general.css'
import logo from '../assets/logo.png'
import './SubmitRequest.css'
import { getPath} from '../Firebase/functions'
import {HandleUpload} from '../Firebase/upload'
// import {ref} from "firebase/storage"
 
const SubmitRequest = () => {

    let RequestName = sessionStorage.getItem("RequestName")

    async function handleSubmit(){   
        let ApproversName = document.getElementById("Approvers-Name")  
        try {
            let ApproverNames = await getPath(RequestName)
           
            for (let index = 0; index < ApproverNames.length; index++) {
                ApproversName.innerHTML += "<h1 className=\"Aprover-Display\"> "+ApproverNames[index]+" : </h1>";
                ApproversName.innerHTML += " <input type=\"email\" placeholder=\"Enter the Email \"/>";
            
            }  
            
        } catch (error) {
            ApproversName.innerHTML += "<h1 className=\"Aprover-Display\"> No Path Found !!!</h1>";   
        }
    }

    const year = ()=>{
        let VarDate = new Date().getFullYear()
        return VarDate
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
    const [file, setFile] = useState("");

    const Change_Handeler = (e)=>{
        setFile(e.target.files[0]);
        console.log(file.length);
    }

    const submit_document =()=>{
        HandleUpload(file);
    
    }


  return (
    <div className='main' onLoad={handleSubmit}>
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
                </div>
            </div>
            <div>
                <h1 className='Heading'>{RequestName} </h1>
                <form className='Form-Label'>
                    <label htmlFor="Submit-File" className='File-Label'>Upload Document :</label>
                    <input type="file" id='File-Input' onChange={Change_Handeler}/> 
                </form>

                <button className='Document-Submit-Button buttons-hover' onClick={submit_document}> Submit</button> 
                <div id="Approvers-Name">
                        
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default SubmitRequest
