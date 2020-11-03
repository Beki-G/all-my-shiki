/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserSessionContext } from "./utils/userContext";
import ProtectedRoute from "./components/Auth/protected-route";
import userAPI from "./utils/userAPI";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Loading from "./components/Auth/Loading";

function App() {
  const [userProfile, setUserProfile] = useState({
    userName: "Wandering Onmyoji",
  });

  const { user, logout, loginWithRedirect, isLoading } = useAuth0();

  useEffect(() => {
    fetchUserData();
  }, [user]);

  async function fetchUserData() {
    if (user !== undefined) {
      let userName, dbProfile;

      //Discord UserNames are not imported so this is a back up
      user.nickname === ""
        ? (userName = "Nameless Onmyoji")
        : (userName = user.nickname);

      const userNewProfile = {
        userName: userName,
        auth0Id: user.sub,
      };

      // check to see if user exists in DB if it does get profile otherwise create new profile
      const isUser = await userAPI.isUser(userNewProfile.auth0Id);
      isUser
        ? (dbProfile = await userAPI.getUser(userNewProfile.auth0Id))
        : (dbProfile = await userAPI.createUser(userNewProfile));

      setUserProfile(dbProfile);
    } else {
      setUserProfile({ userName: "Wandering Onmyoji" });
      // console.log(logout);
    }
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <UserSessionContext.Provider
      value={{
        userProfile: userProfile,
        loginMethod: loginWithRedirect,
        logoutMethod: logout,
      }}
    >
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Test component for useContect testing  */}
            <ProtectedRoute path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
    </UserSessionContext.Provider>
  );
}

export default App;
