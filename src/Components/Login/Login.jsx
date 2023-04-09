import React, { useEffect, useState } from "react";
import "./Login.css";
import { login } from "../Firebase/upload";
import Loading from "../Pages/Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const Login = () => {
  // const navigation = useNavigate();
  const MainHome = sessionStorage.getItem("MainHome");
  const tag = sessionStorage.getItem("UserType");

  window.onload = function () {
    if (MainHome !== null && tag !== null) {
      window.location.href = MainHome;
    } else if (tag !== null && MainHome === null) {
      navigation("/login");
    } else {
      navigation("/");
    }
  };

  const [formErrors, setFormErrors] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setIsError(false);
    const { name, value } = e.target;

    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {});
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email.includes("eng.jfn.ac.lk")) {
      error.email = "Not valid Email ";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }

    if (!values.password) {
      error.password = "Password is required";
    }

    return error;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validateForm(user));

    if (user.email.trim().length !== 0 && user.password.trim().length !== 0) {
      let log = await login(user.email, tag, user.password);
      sessionStorage.setItem("UserMail", user.email);
      setIsError(log);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const hideHandle = () => {
    sessionStorage.clear();
    navigation("/");
  };

  return (
    <div id="blur-background">
      {isLoading && <Loading />}
      <div className="login1">
        <span id="Strong" onClick={hideHandle}>
          X
        </span>
        {isError && (
          <div className="alert alert-danger d-flex align-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-exclamation-circle-fill mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <div> Invalid Password or Email!</div>
          </div>
        )}
        <form className="form ">
          <div className="container text-center">
            <span className="text-success">Login as {tag} </span>
          </div>

          <div className="container">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeHandler}
              value={user.email}
              required
            />

            <div className="error">{formErrors.email}</div>
          </div>

          <div className="container">
            <input
              className="form-input mt-2"
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
              value={user.password}
              required
            />
            <div className="error">{formErrors.password}</div>
          </div>

          <div className="container text-center">
            <button
              className="btn btn-primary px-4 mt-2"
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
