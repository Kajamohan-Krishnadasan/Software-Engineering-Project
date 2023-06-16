import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./home.component.scss";

const HomeComponent = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/sda-uoj-system" />;
  } else {
    return <div>Welcome to academic staff Home Page</div>;
  }
};

export default HomeComponent;
