import React, { useEffect, useState } from "react";
import "../general.css";
import "./MakeRequest.css";
import logo from "../assets/logo.png";
import Loading from "./Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const MakeRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigate();

  let MainHome = sessionStorage.getItem("MainHome");

  const year = () => {
    let VarDate = new Date().getFullYear();
    return VarDate;
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome", "Student-Home");
    }
  }, []);

  const Student_Name = () => {
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

  const Back = () => {
    setIsLoading(true);
    // window.location.href = "/" + MainHome;
    navigation(MainHome);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const Submit_Request = (ReqName) => {
    var RequestName = ReqName;
    sessionStorage.setItem("RequestName", RequestName);
    navigation("/Student-Home/MakeRequest/SubmitRequest");
  };

  const PopUp_Display = (e) => {
    setIsLoading(true);

    navigation("/Student-Home/MakeRequest/Requirement", {
      state: { RequestName: e },
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const requestNames = [
    "Exam Reshedule",
    "Exam Re-attempt",
    "Labratory Session Reshedule",
    "Requesting Studentship Confirmation Letter",
    "Requesting Progress Report",
    "Requesting for New Student Record Book",
    "Requesting for New Student ID card",
  ];

  return (
    <div className="main">
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
              <button className="btn btn-success" onClick={Back}>
                Home
              </button>
              <div className="Welcome-Name"> Welcome {Student_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>

            {requestNames.map((item, index) => {
              return (
                <div className="Request-Background" key={index}>
                  <div className="text"> {item}</div>

                  <div className="d-flex gap-4 pe-4">
                    <button
                      className="Check-Requirements buttons-hover"
                      onClick={() => PopUp_Display(item)}
                    >
                      Check Requirements
                    </button>
                    <button
                      className="Request buttons-hover"
                      onClick={() => Submit_Request(item)}
                    >
                      Request
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default MakeRequest;
