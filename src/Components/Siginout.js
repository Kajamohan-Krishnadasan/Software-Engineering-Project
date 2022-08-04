import React, { useState } from "react";
import MicrosoftLogin from "../..";

const ExamplePage = () => {
  const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data, msal) => {
    console.log(err, data);
    // some actions
    if (!err && data) {
      onMsalInstanceChange(msal);
    }
  };

  const logoutHandler = () => {
    msalInstance.logout();
  };

  return msalInstance ? (
    <button onClick={logoutHandler}>Logout</button>
  ) : (
    <MicrosoftLogin clientId={clientId} authCallback={loginHandler} />
  );
};