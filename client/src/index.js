import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./tailwind.output.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import AuthProviderWithHistory from "./components/Auth/AuthProviderWithHistory";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <AuthProviderWithHistory>
      <App />
    </AuthProviderWithHistory>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
