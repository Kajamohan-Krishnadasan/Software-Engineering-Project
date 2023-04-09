import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";
import "./Popup.css";

import navigation from "../Auth/Navigation";

const Popup = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigate();
  const location = useLocation();

  const RequestName = location.state.RequestName;

  const Hide_Popup = () => {
    setIsLoading(true);

    navigation("/Student-Home/MakeRequest");

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div id="Popup">
      {isLoading && <Loading />}
      <div className="container visible-area">
        <h1 className="text-center text-success mt-3">{RequestName}</h1>
        <hr />

        <div id="Requirement-Details" className="text-dark mb-3">
          These are the main Document you Need to Submit
        </div>

        <div className="col-md-2">
          <ol>
            <li>Requirement 1</li>
            <li>Requirement 2</li>
            <li>Requirement 3</li>
            <li>Requirement 4</li>
            <li>Requirement 5</li>
          </ol>
        </div>

        <button className="btn btn-dark" onClick={Hide_Popup}>
          close
        </button>
      </div>
    </div>
  );
};

export default Popup;
