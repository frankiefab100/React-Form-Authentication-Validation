import React from "react";

const Alert = ({ errorMessage, successMessage }) => {
  return (
    <div className={errorMessage ? "error" : "success"}>
      icon-here
      <span>
        {errorMessage}
        {successMessage}
      </span>
    </div>
  );
};

export default Alert;
