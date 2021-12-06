import React from "react";
import "./spinner.scss";

//Super simple BS5 spinner component
function Spinner() {
  return (
    <div
      className="spinner d-flex justify-content-center align-items-center"
      aria-label="spinner"
      role="spinner"
    >
      <div className="spinner-border">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
export default Spinner;
