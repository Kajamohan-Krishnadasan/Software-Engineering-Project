import React from 'react'
import logo from '../assets/logo.png'

import './Path.css'

const Path = () => {
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

    const Back = ()=>{
        window.location.href='/StaffHome'
    }

    let pathName = sessionStorage.getItem("PathName");

    let i = 1;
    let Approvers = [];
    let noOfApprover = 1;
    
    const add_Persons = ()=>{
        let PathArea = document.getElementById("Path-Area");
        let SelectPersons = document.getElementById('Select-Persons').value;
        
        if(SelectPersons !== "Default" ){ 
            Approvers.push(SelectPersons);
            PathArea.innerHTML += "<div>" + i + "<sup> th </sup>Approver  : " + SelectPersons+ "</div>";
            noOfApprover++;
            i++; 
        }
    }

    const remove_Persons=()=>{
        if(i>0){
            Approvers.pop();
            let PathArea = document.getElementById("Path-Area");
            PathArea.removeChild(PathArea.lastChild);
            noOfApprover--;
            i--;

        }
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
                <button className='Home-Button buttons-hover' onClick={Back}> Home</button>
                <div className='AddPathTitle'> </div>
                <select Id='Select-Persons'>
                    <option value="Default">Select the Staff</option>
                    <option value="Asst.Registrar"> Asst.Registrar</option>
                    <option value="Dean"> Dean</option>
                    <option value="Head of Departments">Head of Departments</option>
                    <option value="Advisor">Advisor</option>
                    <option value="Course Coordinator">Course Coordinator</option>
                </select>
                <button className='Add-Button buttons-hover' onClick={add_Persons} >Add +</button>
                <button className='Remove-Button buttons-hover' onClick={remove_Persons} >Remove</button>
                
                <button className='Submit-Button buttons-hover' >Submit</button>
                <div id='Path-Area'>
                    
                </div>
            
            </div>
        </div>

        <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
    </div>
    
</div>
  )
}

export default Path
