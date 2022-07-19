import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserAuthContextProvider } from "./context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthContextProvider>
    <App />
  </UserAuthContextProvider>
);
