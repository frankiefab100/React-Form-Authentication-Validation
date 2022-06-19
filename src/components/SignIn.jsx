import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContextConsumer } from "../context/AuthContext";

const SignIn = () => {
  const { loginUser, googleAuth, facebookAuth } = AuthContextConsumer();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword({
      [e.target.name]: e.target.value,
    });
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/userprofile");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} action="">
      <h1 className="brand-name">Precise.ly</h1>
      <div className="signup">
        <p className="register-option">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value) || setEmail(e.target.value)
          }
        />
        <label htmlFor="username">Username or Email </label>
      </div>
      <div className="form-group">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="password">Password</label>

        <span onClick={handleShowPassword} className="eye-icon">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="password-option">
        <div className="save-action">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            value={rememberPassword}
            onChange={() => setRememberPassword(!rememberPassword)}
          />
          <span className="checkbox-text"> Remember Me</span>
        </div>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
      <button type="submit" className="login">
        Log In
      </button>
      <div className="authentication-options">
        <div className="sub-option">----- or sign in with ----</div>
        <button onclick={handleGoogleAuth} className="auth-google">
          <FcGoogle size="24px" />
          Continue with Google
        </button>
        <button onclick={handleFacebookAuth} className="auth-facebook">
          <FaFacebook color="#fff" size="24px" />
          Continue with Facebook
        </button>
      </div>
      <div className="terms">
        By continuing, you agree to the <a href="#t">Terms of Use</a> and
        <a href="#t"> Privacy Policy</a>.
      </div>
    </form>
  );
};

export default SignIn;
