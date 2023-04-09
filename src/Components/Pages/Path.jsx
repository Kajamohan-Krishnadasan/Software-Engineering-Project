import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Path.css";
import "../general.css";

import { PathOnSubmit } from "../Firebase/functions";
import Loading from "./Loading";
import navigation from "../Auth/Navigation";

const Path = () => {
  const [isLoading, setIsLoading] = useState(false);
  const MainHome = sessionStorage.getItem("MainHome");
  let pathName = sessionStorage.getItem("PathName");
  const [i, setI] = useState(0);
  const [Approvers, setApprovers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
  }, []);

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

  const hide_reset_button = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const add_Persons = () => {
    let SelectPersons = document.getElementById("Select-Persons");

    if (SelectPersons.value !== "Default" && i < 7) {
      setApprovers([...Approvers, SelectPersons.value]);

      // console.log(Approvers, i);
      setI(i + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Please Select the Staff");
    }
  };

  const remove_Persons = (index) => {
    setIsLoading(true);
    // console.log(index);
    setApprovers(Approvers.filter((_item, i) => i !== index));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  async function handleSubmit() {
    setIsLoading(true);

    if (await PathOnSubmit(pathName, i, Approvers)) {
      alert("Path Added Successfully");
      setSuccessMessage(pathName + " Path Added Successfully");
      navigation(MainHome);
    }

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
            <div className="d-flex mb-3 gap-3 px-3">
              <select
                className="form-select form-select p-3 "
                id="Select-Persons"
              >
                <option value="Default">Select the Staff</option>
                <option value="Asst.Registrar"> Asst.Registrar</option>
                <option value="Dean"> Dean</option>
                <option value="Head of Departments">Head of Departments</option>
                <option value="Advisor">Advisor</option>
                <option value="Course Coordinator">Course Coordinator</option>
              </select>

              <button
                className="btn btn-outline-success buttons-hover p-3"
                onClick={add_Persons}
              >
                Add +
              </button>

              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>

            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            <div id="Path-Area">
              {Approvers.length > 0 &&
                Approvers.map((item, index) => {
                  return (
                    <div className="input-group mb-3" key={index}>
                      <span className="input-group-text">
                        {index + 1} <sup> th </sup>Approver
                      </span>

                      <input
                        className="form-control"
                        type="text"
                        value={item}
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                      <button
                        className="btn btn-danger"
                        onClick={() => remove_Persons(index)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default Path;
