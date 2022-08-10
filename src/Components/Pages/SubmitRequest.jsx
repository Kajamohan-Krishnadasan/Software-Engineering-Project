import React,{useState} from 'react'
import '../general.css'
import logo from '../assets/logo.png'
import './SubmitRequest.css'
import { getPath} from '../Firebase/functions.js'
import { upload } from '../Firebase/upload.js'

import { isValidInput } from '../Auth/CheckFunction'
 
const SubmitRequest = () => {
    const [file, setFile] = useState(null);
    let ApproversList = [];

    let RequestName = sessionStorage.getItem("RequestName")
    let Username = sessionStorage.getItem("Username")
    
    const year = ()=>{
        let VarDate = new Date().getFullYear()
        return VarDate
    }

    const Student_Name = ()=>{
        return Username
    }
    const Logout = ()=>{
        window.location.href='/'
    }

    const Back = ()=>{
        window.location.href='/StudentHome'
    }

    async function handleSubmit(){   
        let ApproversName = document.getElementById("Approvers-Name")  
        try {
            let ApproverNames = await getPath(RequestName)
           
            for (let index = 0; index < ApproverNames.length; index++) {
                ApproversName.innerHTML += "<h1 className=\"Aprover-Display\"> "+ApproverNames[index]+" : </h1>"
                ApproversName.innerHTML += " <input type=\"email\" required placeholder=\"Enter the Email \"/>"
            
            }  
            
        } catch (error) {
            ApproversName.innerHTML += "<h1 className=\"Aprover-Display\"> No Path Found !!!</h1>" 
        }
    }

    

    const handleChange= (event)=> {
        setFile(event.target.files[0]);
    }

    const handleUpload = ()=> {
        let Approvers_Mail = document.getElementsByTagName("input");
        let Arraylength = Approvers_Mail.length;
        ApproversList = []
        for (let index = 1; index < Arraylength; index++) {
            ApproversList.push(Approvers_Mail[index].value)
        }

        if (!file){
            alert("Please choose a file first!")
        }else if(!isValidInput(ApproversList)){
            alert("Please Enter the Valid Mail!")
        }else {
            upload(file, Username ,ApproversList, RequestName).then(clear_field)
        }   
    }
    
    const clear_field =()=>{
        let inputs = document.getElementsByTagName("input");
        for (let index = 0; index < inputs.length; index++) {
            inputs[index].value = "";
            
        }
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
                <div className='Form-Label'>
                    <label htmlFor="Submit-File" className='File-Label'>Upload Document :</label>
                    <input type="file" id='File-Input'  onChange={handleChange}/> 
                </div>

                <button className='Document-Submit-Button buttons-hover' onClick={handleUpload}> Submit</button> 
                
                <div id="Approvers-Name">
                        
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default SubmitRequest
