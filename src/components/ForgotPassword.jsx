import React from "react";
import { Link } from "react-router-dom";
import { AuthContextConsumer } from "../context/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = AuthContextConsumer();

  return (
    <form action="">
      <div>
        Back to <Link to="/">Sign In</Link>
      </div>

      <div className="form-group">
        <input type="email" name="email" id="email" />
        <label htmlFor="email">Email </label>
      </div>

      <button onClick={resetPassword} type="submit" className="login">
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPassword;
