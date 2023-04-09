import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Path.css";

import { PathOnSubmit } from "../Firebase/functions";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Path = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const MainHome = sessionStorage.getItem("MainHome");

  const year = () => {
    let VarDate = new Date().getFullYear();
    return VarDate;
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome", sessionStorage.getItem("MainHome"));
    }
  }, [navigation]);

  const Staff_Name = () => {
    return sessionStorage.getItem("Username");
  };

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
    navigation(MainHome);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  let pathName = sessionStorage.getItem("PathName");

  const hide_reset_button = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const [i, setI] = useState(1);
  const [Approvers, setApprovers] = useState([]);
  let noOfApprover = 0;

  const add_Persons = () => {
    setIsLoading(true);

    let PathArea = document.getElementById("Path-Area");
    let SelectPersons = document.getElementById("Select-Persons");
    console.log(SelectPersons.value);

    if (SelectPersons.value !== "Default" && i < 7) {
      // Approvers.push(SelectPersons.value);
      setApprovers([...Approvers, SelectPersons.value]);
      PathArea.innerHTML += `<div> ${i} <sup> th </sup>Approver  : ${SelectPersons.value} </div>`;
      noOfApprover++;
      setI(i + 1);
    } else {
      alert("Please Select the Staff");
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const remove_Persons = () => {
    setIsLoading(true);

    if (i > 0) {
      // Approvers.pop();
      setApprovers(Approvers.slice(0, -1));
      let PathArea = document.getElementById("Path-Area");
      PathArea.removeChild(PathArea.lastChild);
      noOfApprover--;
      setI(i - 1);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  async function handleSubmit() {
    setIsLoading(true);
    await PathOnSubmit(pathName, noOfApprover, Approvers);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className="main" onLoad={hide_reset_button}>
      {isLoading && <Loading />}
      <div className="Background">
        <div className="Header">
          <img src={logo} alt="University Logo" className="Logo" />
          <div className="title">
            Welcome to Student Document Approval System{" "}
          </div>
        </div>

        <div className="Main-Background">
          <div className="Content-Background">
            <div className="welcome-with-Logout-button">
              <button className="btn btn-success" onClick={Home}>
                Home
              </button>
              <div className="Welcome-Name"> Welcome {Staff_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>

            <div className="AddPathTitle">{pathName} </div>

            <select id="Select-Persons" className="form-select mb-3">
              <option value="Default">Select the Staff</option>
              <option value="Asst.Registrar"> Asst.Registrar</option>
              <option value="Dean"> Dean</option>
              <option value="Head of Departments">Head of Departments</option>
              <option value="Advisor">Advisor</option>
              <option value="Course Coordinator">Course Coordinator</option>
            </select>

            <div className="buttons-set d-flex gap-5 justify-content-center">
              <button
                className="btn btn-primary buttons-hover"
                onClick={add_Persons}
              >
                Add +
              </button>

              <button className="btn btn-danger" onClick={remove_Persons}>
                Remove
              </button>

              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>

            <div id="Path-Area"></div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default Path;
