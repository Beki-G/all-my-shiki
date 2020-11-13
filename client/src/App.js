/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  UserSessionProvider } from "./utils/UserContext";
import ProtectedRoute from "./components/Auth/protected-route";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Profile from "./pages/Profile"
import { Dashboard } from "./pages/Dashboard";

function App() {

  return (
    <UserSessionProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/test" component={Test} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </UserSessionProvider>
  );
}

export default App;
