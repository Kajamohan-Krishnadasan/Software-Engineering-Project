import React from "react";
import "./loading.component.scss";

const LoadingComponent = () => {
  return (
    <div className="loading">
      <div className="ring">
        Loading
        <span></span>
      </div>
    </div>
  );
};

export default LoadingComponent;
