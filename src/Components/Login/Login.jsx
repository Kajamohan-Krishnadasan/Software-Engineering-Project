import React, { useEffect, useState } from "react";
import "./Login.css";
import {log} from "../Firebase/upload"
import { documentId } from "firebase/firestore";


const Login = (props) => {
  let tag = sessionStorage.getItem("type");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  sessionStorage.setItem("UserMail",user.email);
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email.includes("eng.jfn.ac.lk")){
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

  const loginHandler = (e) => {
    console.log(user.email)
    console.log(user.password)
    console.log(tag)
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    log(user.email,tag,user.password);
   
  };
  const[hide, setHide] = useState(true);
 
  
  const hideHandle=()=>{

    if(hide === true){
      setHide(false)
    }
    window.location.reload()
  }

  return (
    <div>
    {hide && <div className='login1'>
      <button id="Strong" onClick={hideHandle}>X</button>
      <form>
        <h1>Login</h1>
        <input
        className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className='error'>{formErrors.email}</p>
        <input className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className='error'>{formErrors.password}</p>
        <button className='button_common' onClick={loginHandler}>
          Login
        </button>
      </form>
      
    </div>}</div>
  );
};
export  default Login;