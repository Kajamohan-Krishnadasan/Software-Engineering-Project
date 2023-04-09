import React, { useEffect, useState } from "react";
import "../general.css";
import "./ApproversStatusPage.css";
import logo from "../assets/logo.png";

import { readDocumentsStaff, submitStaff } from "../Firebase/upload";
import Loading from "./Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const ApproversStatusPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // var fileLists = [];
  const [fileLists, setFileLists] = useState([]);

  window.onload = () => {
    handleSubmit();
  };

  let StatusType = sessionStorage.getItem("StatusType");
  let MainHome = sessionStorage.getItem("MainHome");
  let Username = sessionStorage.getItem("Username");
  let UserMail = sessionStorage.getItem("UserMail");
  let status = "";

  if (StatusType === "New Requests") status = "Processing";
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
    navigation(MainHome);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  let id = [];
  const submit = (e) => {
    setIsLoading(true);
    let decisions = document.getElementsByClassName("SetStatus");
    let comments = document.getElementsByClassName("Comment");

    console.log(id[e]);
    if (decisions[e].value !== "Default") {
      submitStaff(id[e], decisions[e].value, comments[e].value, UserMail);
    } else {
      alert("Please select Approve or Reject  !!!");
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      setFileLists(
        await readDocumentsStaff(UserMail, status).then((res) => {
          return res;
        })
      );
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="main">
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
              <div className="Welcome-Name"> Welcome {Set_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>
            <h1 className="Status-Heading">{StatusType} </h1>

            <div id="Staff-Display-Area">
              {fileLists.length === 0 && (
                <h1 className="Aprover-Display"> No Request Found !!!</h1>
              )}

              <div className="accordion" id="accordionExample">
                {fileLists.length > 0 &&
                  fileLists.map((fileList, index) => {
                    id.push(fileList.File_URL);
                    return (
                      <div key={index} className="accordion-item mb-1">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + index}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <b>
                              {fileList.Requester_Mail + " "}
                              Requesting for
                              {" " + fileList.Request_Type}
                            </b>
                          </button>
                        </h2>

                        <div
                          id={"collapse" + index}
                          className="accordion-collapse collapse "
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="input-group flex-nowrap row mb-2 ">
                              <span
                                class="input-group-text border-success bg-success text-white col-3"
                                id="addon-wrapping"
                              >
                                Student Name
                              </span>

                              <span className="form-control border text-success border-success">
                                {fileList.Requester_Mail}
                              </span>
                            </div>

                            <div className="input-group  flex-nowrap row mb-2">
                              <span
                                class="input-group-text border border-secondary bg-secondary text-white col-3"
                                id="addon-wrapping"
                              >
                                Request Type
                              </span>

                              <span className="form-control border border-secondary text-secondary ">
                                {fileList.Request_Type}
                              </span>
                            </div>

                            <div className="input-group flex-nowrap row">
                              <span
                                class="input-group-text border border-info bg-info text-white col-3"
                                id="addon-wrapping"
                              >
                                Document
                              </span>

                              <a
                                href={id[index]}
                                className="form-control border border-info link-info text-decoration-none"
                              >
                                Click Here...
                              </a>
                            </div>
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th> No </th>
                                  <th> Approver Email </th>
                                  <th> Status </th>
                                  <th> Comments</th>
                                </tr>
                              </thead>
                              <tbody className="table-group-divider">
                                {fileList.Approvers.map((approver, j) => {
                                  return (
                                    <tr key={j}>
                                      <td> {j + 1} </td>
                                      <td> {approver} </td>
                                      <td> {fileList.Status[j]} </td>
                                      <td> {fileList.Comment} </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            <div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="exampleFormControlTextarea1"
                                  className="form-label"
                                >
                                  Comment
                                </label>

                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  name="Remarks"
                                  maxLength="300"
                                  placeholder="Enter Your Remarks"
                                ></textarea>
                              </div>

                              <div className="row d-flex gap-3">
                                <select
                                  name="SetStatus"
                                  className="form-select col"
                                >
                                  <option value="Default">
                                    Approve / Reject
                                  </option>
                                  <option value="Approved">Approve </option>
                                  <option value="Rejected">Reject</option>
                                </select>

                                <button
                                  className="col-2 btn btn-primary"
                                  onClick={submit}
                                >
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                          <hr class="border w-100 border-danger border-3 opacity-75" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default ApproversStatusPage;
