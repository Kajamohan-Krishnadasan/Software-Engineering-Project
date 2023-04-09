import React, { useEffect, useState } from "react";
import "../general.css";
import "./StatusRequest.css";
import logo from "../assets/logo.png";
import { readDocuments } from "../Firebase/upload";
import Loading from "./Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const StatusRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigate();

  let MainHome = sessionStorage.getItem("MainHome");
  let StatusType = sessionStorage.getItem("StatusType");
  let Username = sessionStorage.getItem("Username");
  let status = "";

  if (StatusType === "Ongoing Requests") status = "Processing";
  else if (StatusType === "Approved Requests") status = "Approved";
  else if (StatusType === "Rejected Requests") status = "Rejected";

  const year = () => {
    let VarDate = new Date().getFullYear();

    return VarDate;
  };

  const Set_Name = () => {
    return Username;
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome", sessionStorage.getItem("MainHome"));
    }
  }, []);

  const Logout = () => {
    setIsLoading(true);

    sessionStorage.clear();
    localStorage.clear();
    navigation("/");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const Home = () => {
    setIsLoading(true);
    navigation(  MainHome);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    let Display = document.getElementById("Display");
    try {
      let fileLists = await readDocuments(Username, status);

      if (fileLists.length > 0) {
        for (let i = 0; i < fileLists.length; i++) {
          Display.innerHTML += `<p> Request Type : ${fileLists[i].Request_Type}</p>`;
          Display.innerHTML += `Document : <a className='Status-liink'  href = '${fileLists[i].File_URL}'> Click Here... </a>`;
          Display.innerHTML += `<br/> 
            <table class="Status-Table1"> 
                <tr>
                    <th>No </th> 
                    <th>Approver Email </th> 
                    <th>Status </th>  
                    <th> Comments</th>
                </tr>   
            </table>`;

          for (let j = 0; j < fileLists[i].No_of_Approvers; j++) {
            Display.innerHTML += `
                <table class="Status-Table2">
                    <tr> 
                        <th> ${j + 1} </th> 
                        <th> ${fileLists[i].Approvers[j]} </th> 
                        <th> ${fileLists[i].Status[j]} </th>
                        <th> ${fileLists[i].Comment[j]} </th>
                    </tr> 
                </table>`;
          }
          Display.innerHTML += `<hr/>`;
        }
      } else {
        Display.innerHTML +=
          '<h1 class="Aprover-Display"> No Request Found !!!</h1>';
      }
    } catch (error) {
      Display.innerHTML +=
        '<h1 class="Aprover-Display"> No Request Found !!!</h1>';
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="main" onLoad={handleSubmit}>
      {isLoading && <Loading />}
      <div className="Background">
        <div className="Header">
          <img src={logo} alt="University Logo" className="Logo" />
          <div className="title">
            Welcome to Student Document Approval System
          </div>
        </div>

        <div className="Main-Background">
          <div className="Content-Background">
            <div className="welcome-with-Logout-button">
              <button className="btn btn-success" onClick={Home}>
                Home
              </button>
              <div className="Welcome-Name"> Welcome {Set_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>

            <h1 className="Status-Heading">{StatusType} </h1>

            <div id="Display"></div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default StatusRequest;
