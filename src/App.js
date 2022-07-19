import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import ForgotPassword from "./components/ForgotPassword";
// import RequiredAuth from "./protectedroute/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* <Route element={<RequiredAuth />}> */}
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* </Route> */}
        </Routes>
      </Router>
      {/* <SignIn />
      <SignUp />
      <UserProfile />
      <ForgotPassword /> */}
    </div>
  );
}

export default App;
