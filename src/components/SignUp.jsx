import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import FormValidation from "../validation/FormValidation";
import validate from "../validation/FormValidation";
import { AuthContextConsumer } from "../context/AuthContext";

const SignUp = () => {
  const { registerUser, email, password, googleAuth, facebookAuth } =
    AuthContextConsumer();

  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await registerUser(email, password);
      navigate("/userprofile");
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();

    try {
      await googleAuth();
      navigate("/userprofile");
    } catch (error) {
      alert(error);
    }
  };

  const handleFacebookAuth = async (e) => {
    e.preventDefault();

    try {
      await facebookAuth();
      navigate("/userprofile");
    } catch (error) {
      alert(error);
    }
  };

  const { inputValues, handleFormChange, errorMessage, successMessage } =
    FormValidation(validate);

  const [passwordValues, setPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleShowPassword = () => {
    setPasswordValues({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordValues({
      ...passwordValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSignUp} action="">
      <h1 className="brand-name">Precise.ly</h1>
      <div className="signin">
        <p className="login-option">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>

      {errorMessage.firstname && <p>{errorMessage.firstname} </p>}

      {errorMessage && <Alert className="error" errorMessage={errorMessage} />}
      {successMessage && (
        <Alert className="success" successMessage={successMessage} />
      )}
      <div className="form-name">
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            id="first-name"
            value={inputValues.firstname}
            onChange={handleFormChange}
          />
          <label htmlFor="first-name">First Name </label>
        </div>
        <div className="form-group last-name">
          <input
            type="text"
            name="lastname"
            id="last-name"
            value={inputValues.lastName}
            onChange={handleFormChange}
          />
          <label htmlFor="last-name">Last Name </label>
        </div>
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          value={inputValues.email}
          onChange={handleFormChange}
        />
        <label htmlFor="email">Email Address </label>
      </div>
      <div className="form-group">
        <input
          type={passwordValues.showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={passwordValues.password && inputValues.password}
          onChange={handlePasswordChange("password")}
        />
        <label htmlFor="password">Password</label>

        <span onClick={handleShowPassword} className="eye-icon">
          {passwordValues.showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="form-group">
        <input
          type={passwordValues.showPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirm-password"
          value={passwordValues.password && inputValues.password}
          onChange={handlePasswordChange("password")}
        />
        <label htmlFor="confirm-password">Confirm Password</label>

        <span onClick={handleShowPassword} className="eye-icon">
          {passwordValues.showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button type="submit" className="register">
        Create Account
      </button>
      <div className="authentication-options">
        <div className="sub-option">----- or sign in with ----</div>
        <button onClick={handleGoogleAuth} className="auth-google">
          <FcGoogle size="24px" />
          Continue with Google
        </button>
        <button onClick={handleFacebookAuth} className="auth-facebook">
          <FaFacebook color="#fff" size="24px" />
          Continue with Facebook
        </button>
      </div>
      <div className="terms">
        By signing up, you agree to the <a href="#t">Terms of Use</a> and
        <a href="#t">Privacy Policy</a>. You also agree to receive information
        and offers relevant to our services via email.
      </div>
    </form>
  );
};

export default SignUp;
