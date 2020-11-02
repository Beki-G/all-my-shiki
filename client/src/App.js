import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserSessionContext } from "./utils/userContext";
import Home from "./pages/Home";
import Test from "./pages/Test"

function App() {
  const guestUser = { __guest: true, displayName: "Onmyoji" };

  const [userProfile, setUserProfile] = useState(guestUser);

  const { user } = useAuth0();

  useEffect(() => {
    fetchUserData();
  }, [user]);

  function fetchUserData() {
    if (user !== undefined) {
      let userName;
      user.nickname === ""
        ? (userName = "Nameless Mistress")
        : (userName = user.nickname);
      const userNewProfile = {
        __guest: false,
        displayName: userName,
      };

      setUserProfile(userNewProfile);
    } else {
      setUserProfile(guestUser);
    }
  }

  return (
    <UserSessionContext.Provider value={{ userProfile }}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Test component for useContect testing  */}
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
    </UserSessionContext.Provider>
  );
}

export default App;
