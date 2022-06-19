import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContextConsumer } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { user } = AuthContextConsumer();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequiredAuth;
