import React, { useEffect, useState } from "react";
import "../general.css";
import logo from "../assets/logo.png";
import "./SubmitRequest.css";
import { getPath } from "../Firebase/functions.js";
import { upload } from "../Firebase/upload.js";

import { isValidInput } from "../Auth/CheckFunction";
import Loading from "./Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const SubmitRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigate();
  let MainHome = sessionStorage.getItem("MainHome");
  const [file, setFile] = useState(null);
  let ApproversList = [];
  const [ApproverNames, setApproverNames] = useState([]);
  const [error, setError] = useState("");

  let RequestName = sessionStorage.getItem("RequestName");
  let Username = sessionStorage.getItem("Username");

  const year = () => {
    let VarDate = new Date().getFullYear();
    return VarDate;
  };

  const Student_Name = () => {
    return Username;
  };

  window.onload = async () => {
    let ApproverNamesDetails = await displayApprovers();
    setApproverNames(ApproverNamesDetails);
  };

  const displayApprovers = async () => {
    setIsLoading(true);
    try {
      let ApproverNamesDetails = await getPath(RequestName);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return ApproverNamesDetails;
    } catch (error) {
      console.log(error);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return [];
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome", sessionStorage.getItem("MainHome"));

      // console.log(ApproverNames);
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

  const Back = () => {
    setIsLoading(true);
    navigation(MainHome);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (event) => {
    // setIsLoading(true);
    hideAlert();
    setFile(event.target.files);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  };

  const handleUpload = async () => {
    setIsLoading(true);

    let Approvers_Mail = document.getElementsByTagName("input");
    let Arraylength = Approvers_Mail.length;
    ApproversList = [];
    for (let index = 1; index < Arraylength; index++) {
      ApproversList.push(Approvers_Mail[index].value);
    }

    if (!isValidInput(ApproversList)) {
      setError("Please Enter the Valid Mail!");
    } else if (!file) {
      setError("Please choose a file first!");
    } else {
      await upload(file, Username, ApproversList, RequestName).then(() => {
        clear_field();
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const clear_field = () => {
    setIsLoading(true);

    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].value = "";
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const hideAlert = () => {
    setError("");
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
              <button className="btn btn-success" onClick={Back}>
                Home
              </button>
              <div className="Welcome-Name"> Welcome {Student_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>
            <i className="border border-light border-3 opacity-75 mb-3" />
            <h1 className="Heading">{RequestName} </h1>

            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile"
                onChange={handleChange}
                multiple
              />
              <label className="input-group-text" htmlFor="inputGroupFile">
                Upload
              </label>
            </div>

            <div id="Approvers-Name">
              {ApproverNames &&
                ApproverNames.map((Approver, index) => (
                  <div key={index}>
                    <div className="input-group flex-nowrap my-2">
                      <span
                        className="input-group-text text-light  bg-success flex-wrap col-4"
                        id="addon-wrapping"
                      >
                        {Approver}
                      </span>
                      <input
                        type="email"
                        className="form-control col-3"
                        required
                        placeholder="Email Address"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={hideAlert}
                      />
                    </div>
                  </div>
                ))}

              {error && <div className="error alert alert-danger">{error}</div>}
              <button
                className="btn btn-primary buttons-hover px-4 mt-2"
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default SubmitRequest;
