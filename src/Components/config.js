import React from "react";
import MicrosoftLogin from "react-microsoft-login";

export default (props) => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <MicrosoftLogin clientId={'58a10bab-18a8-43e3-bb04-57229e467479'} authCallback={authHandler} />
  );
};