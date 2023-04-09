import React, { useEffect } from "react";
import "../general.css";
import "./LoginPage.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const year = () => {
    let VarDate = new Date().getFullYear();
    return VarDate;
  };

  useEffect(() => {
    if (sessionStorage.getItem("MainHome") !== null) {
      navigate("/" + sessionStorage.getItem("MainHome"));
      
    }else if (sessionStorage.getItem("UserType") !== null) {
      navigate("/login");
    }   else {
      navigate("/");
    }
  }, [navigate]);
  

  const Student = () => {
    let type = "Student";
    sessionStorage.setItem("UserType", type);
    navigate("/login");
  };

  const Academic_Staff = () => {
    let type = "Academic Staff";

    sessionStorage.setItem("UserType", type);
    navigate("/login");
  };

  const Non_Academic_Staff = () => {
    let type = "Non-Academic Staff";

    sessionStorage.setItem("UserType", type);
    navigate("/login");
  };

  const TableDisplay = () => {
    return (
      <table className="login-table">
        <thead>
          <tr>
            <th className="th1 text-center">Student</th>
            <th className="th2 text-center">Academic Staff</th>
            <th className="th3 text-center">Non-Academic Staff</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="odd">Request Exam Reschedule</td>
            <td rowSpan={3} className="even">
              Approve/Reject Exam Reschedule
            </td>
            <td className="odd">Approve/Reject Exam Reschedule</td>
          </tr>

          <tr>
            <td className="even">Request Exam Re-attempt</td>
            <td className="even">Approve/Reject Exam Re-attempt</td>
          </tr>

          <tr>
            <td className="odd">Request Lab Reschedule</td>

            <td className="odd">Sent Studentship Confirm Letter</td>
          </tr>

          <tr>
            <td className="even">Request Studentship Confirm Letter</td>
            <td rowSpan={2} className="odd">
              Approve/Reject Exam Re-attempt
            </td>
            <td className="even">Sent Progress Report </td>
          </tr>

          <tr>
            <td className="odd">Request Progress Report</td>

            <td className="odd">Provide New University Student Record Book</td>
          </tr>

          <tr>
            <td className="even">Request New University Student Record Book</td>
            <td rowSpan={2} className="even">
              Approve/Reject Lab Reschedule
            </td>
            <td rowSpan={2} className="even">
              Provide New University Student Identity Card
            </td>
          </tr>

          <tr>
            <td className="odd">
              Request New University Student Identity Card
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="main">
      <div className="Background">
        <div className="Header">
          <img src={logo} alt="University Logo" className="Logo" />
          <div className="title">
            Welcome to Student Document Approval System
          </div>
        </div>

        <div className="Main-Background">
          <div className="Content-Background bg">
            <TableDisplay />

            <div className="buttons-sets">
              <button className="Sign-In-Button " onClick={Student}>
                Sign in as Student
              </button>
              <button className="Sign-In-Button " onClick={Academic_Staff}>
                Sign in as Academic Staff
              </button>
              <button onClick={Non_Academic_Staff}>
                Sign in as Asst.Registrar
              </button>
            </div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default LoginPage;
