import React from 'react'
import '../general.css'
import './ApproversStatusPage.css'
import logo from '../assets/logo.png'

import { readDocumentsStaff, submitStaff } from '../Firebase/upload'

const  ApproversStatusPage = () => {
    let StatusType = sessionStorage.getItem("StatusType");
    let MainHome = sessionStorage.getItem("MainHome");
    let Username = sessionStorage.getItem("Username");
    let UserMail =  sessionStorage.getItem("UserMail");
    let status = "";
    if(StatusType === "New Requests")
        status ="Processing";
    else if(StatusType === "Approved Requests")
        status = "Approved";
    else if(StatusType === "Rejected Requests")
        status = "Rejected";
    

    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    const Set_Name = () =>{
        return Username;
    } 
    
    const Logout = ()=>{
        window.location.href='/'
    }
    const Home = ()=>{
        window.location.href='/'+ MainHome
    }
    let id = [];
    const submit=(e)=>{
        let decisions = document.getElementsByClassName("SetStatus");
        let comments = document.getElementsByClassName("Comment");

        console.log(id[e]);
        if(decisions[e].value !== "Default"){
            submitStaff(id[e], decisions[e].value,comments[e].value ,UserMail);
        }else{
            alert("Please select Approve or Reject  !!!");
        }

    }


    const handleSubmit= async()=>{
        let Display = document.getElementById("Staff-Display-Area");
        
        try {
            let fileLists = await readDocumentsStaff(UserMail, status);;
            
            if(fileLists.length > 0){
                for(let i = 0; i < fileLists.length; i++){
                    id.push(fileLists[i].File_URL);
                    Display.innerHTML += `<br/><p> Requester : ${ fileLists[i].Requester_Mail}</p>`;
                    Display.innerHTML += `<p> Request Type : ${ fileLists[i].Request_Type}</p>`;
                    Display.innerHTML += `Document : <a className='Status-liink'  href = '${ fileLists[i].File_URL}'> Click Here... </a>`;
                    Display.innerHTML += `<br/>
                    <table class="Status-Table1"> 
                        <tr> 
                            <th>No </th> <th>Approver Email </th> <th>Status </th>  <th> Comments</th>
                        </tr> 
                    </table>`;
                    for(let j = 0; j < fileLists[i].No_of_Approvers; j++){
                        Display.innerHTML += `
                        <table class="Status-Table2">
                                <tr> 
                                    <th>${j+1} </th> <th>${fileLists[i].Approvers[j]} </th> <th>${fileLists[i].Status[j]}  </th>  <th>  ${fileLists[i].Comment[j]}</th>
                                </tr> 
                            </table>`;
                    }
                    Display.innerHTML += `<div class="Input-Area">
                    <textarea class="Comment" name="Remarks" rows="4" cols="50" maxlength="300" placeholder="Enter Your Remarks"></textarea>
                        <select name="SetStatus" class="SetStatus">
                                <option value="Default" >Approve / Reject</option>
                                <option value="Approved">Approve </option>
                                <option value="Rejected">Reject</option>
                        </select> 
                        <button class="Status-buttons-hover Status-Submit-Button"  >submit</button> </div`;
                }
                let butonsTotal = document.getElementsByClassName("Status-Submit-Button");

                for (let i = 0; i < butonsTotal.length; i++) {
                    butonsTotal[i].addEventListener("click",()=>submit(i));
                }


            }else{
                Display.innerHTML += `<h1 class="Aprover-Display"> No Request Found !!!</h1>`  
            }

        } catch (error) {
            console.log(error)
            // Display.innerHTML += `<h1 class="Aprover-Display"> No Request Found !!!</h1>` 
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
                        <div className="Welcome-Name"> Welcome {Set_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>
                    <button className='Home-Button buttons-hover' onClick={Home}> Home</button>
                    <h1 className='Status-Heading'>{StatusType} </h1>

                    <div id="Staff-Display-Area">

                    </div>
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default ApproversStatusPage
