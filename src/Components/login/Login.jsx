import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';



// const loginStudents = ()=>{
//   window.location.href = "./Home";
// }

// const loginStaffs =()=>{

// }

const Student = ()=>{
  return (
    <ul className='Student'>
        <li className='odd'>Student Request Exam Reschedule</li>
        <li className='even'>Request Exam Re-attempt</li>
        <li className='odd'>Request Lab Reschedule</li>
        <li className='even'>Request Studentship Confirm Letter</li>
        <li className='odd'>Request Progress Report</li>
        <li className='even'>Request New University Student Record Book</li>
        <li className='odd'>Request New University Student Identity Card</li>
    </ul>
      );
};


const AcademicStaff =()=>{
  return(
    <ul className='AcademicStaff'>
      <li className='odd'>Approve/Reject Exam Reschedule</li>
      <li className='even'>Approve/Reject Exam Re-attempt</li>
      <li className='odd'>Approve/Reject Lab Reschedule</li>
    </ul>
    );
}

const NonAcademicStaff =()=>{
  return(
    <ul className='NonAcademicStaff'>
        <li className='odd'>Approve/Reject Exam Reschedule</li>
        <li className='even'>Approve/Reject Exam Re-attempt</li>
        <li className='odd'>Sent Studentship Confirm Letter</li>
        <li className='even'>Sent Progress Report</li>
        <li className='odd'>Provide New University Student Record Book</li>
        <li className='even'>Provide New University Student Identity Card</li>
      </ul>
    );
}

const TableDisplay = ()=>{
  return(
    <table className='table'>
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
const mobileView = ()=>{
 
  if(document.getElementById("type").value === "Student"){
    ReactDOM.render(<Student/>, document.getElementById('typeDisplay'));

  }

  if(document.getElementById("type").value === "AcademicStaff"){
    ReactDOM.render(<AcademicStaff/>, document.getElementById('typeDisplay'));
  }

  if(document.getElementById("type").value === "NonAcademicStaff"){
    ReactDOM.render(<NonAcademicStaff/>, document.getElementById('typeDisplay'));

  }
}

const Login = () => {
  return (
    <div className='main'>
      <div className='login'>

        <select name="type" id="type" >
          <option value="Student" onClick={mobileView} onChange={mobileView}>Student</option>
          <option value="AcademicStaff">Academic Staff</option>
          <option value="NonAcademicStaff">Non-Academic Staff</option>
        </select>
        <div id='typeDisplay'></div>
        {/* <Student/>
        <AcademicStaff/>
        <NonAcademicStaff/> */}
        <TableDisplay/>
        <div className='loginButton'>
          <button onClick={()=>{window.location.href= "/Home"}}>Student Sign in</button>
          <button onClick={()=>{window.location.href= "/Home"}}>Staff Sign in</button>
        </div>      
      </div>
      
    </div>
  )
}

export default Login
