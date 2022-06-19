import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import ForgotPassword from "./components/ForgotPassword";
import RequiredAuth from "./protectedroute/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route element={<RequiredAuth />}>
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
