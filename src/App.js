import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import LoginPage from "./Components/Pages/LoginPage";
import StaffHomePage from "./Components/users/StaffHomePage";
import StudentHomePage from "./Components/users/StudentHomePage";
import MakeRequest from "./Components/Pages/MakeRequest";
import WorkFlow from "./Components/Pages/CreateDocumentFlow";
import Path from "./Components/Pages/Path";
import AproversPage from "./Components/users/ApproversPage";
import SubmitRequest from "./Components/Pages/SubmitRequest";
import StatusRequest from "./Components/Pages/StatusRequest";
import ApproversStatusPage from "./Components/Pages/ApproversStatusPage";
import Login from "./Components/Login/Login";
import Popup from "./Components/Popup/Popup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Login Page */}
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<Login />} />

          {/* Student */}
          <Route path="/Student-Home" element={<StudentHomePage />} />
          <Route path="/Student-Home/MakeRequest" element={<MakeRequest />} />
          <Route
            path="/Student-Home/MakeRequest/SubmitRequest"
            element={<SubmitRequest />}
          />
          <Route
            path="/Student-Home/MakeRequest/Requirement"
            element={<Popup />}
          />

          {/* Academic Staff */}
          <Route path="/Acc-Staff-Home" element={<AproversPage />} />
          <Route
            path="/Acc-Staff-Home/Status"
            element={<ApproversStatusPage />}
          />

          {/* Non-Academic Staff */}
          <Route path="/Non-Acc-Staff-Home" element={<StaffHomePage />} />
          <Route
            path="/Non-Acc-Staff-Home/SetWorkFlow"
            element={<WorkFlow />}
          />
          <Route
            path="/Non-Acc-Staff-Home/SetWorkFlow/Path"
            element={<Path />}
          />
          <Route
            path="/Non-Acc-Staff-Home/Status"
            element={<ApproversStatusPage />}
          />

          {/* Ongoing Request / Approved Request / Rejected Request */}

          <Route path="/StatusRequest" element={<StatusRequest />} />

          <Route exact path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
