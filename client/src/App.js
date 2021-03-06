import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/Auth/protected-route";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import CharacterProfile from "./pages/CharacterProfile";
import Shikigami from "./pages/Shikigami";
import TeamProfile from "./pages/TeamProfile";
import CreateModChara from "./pages/CreateModChara";
import CreateTeam from "./pages/CreateTeam";
import Team from "./pages/Team";
import Traits from "./pages/Traits";
import AdvancedSearch from "./pages/AdvancedSearch";
import UserSessionProvider from "./utils/UserContext";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import ScrollToTopBtn from "./components/Buttons/ScrollToTopBtn/ScrollToTopBtn";


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
            <ProtectedRoute path="/createshiki" component={CreateModChara} />
            <ProtectedRoute path="/createteam" component={CreateTeam} />
            <Route path="/shikigami" component={Shikigami} />
            <Route path="/advancedSearch" component={AdvancedSearch} />
            <Route path="/teams" component={Team} />
            <Route path="/traits" component={Traits} />
            <Route path="/shiki/:id" component={CharacterProfile} />
            <Route path="/team/:id" component={TeamProfile} />
            <Route path="/about" component={About} />
            <Route path="/howtouse" component={HowToUse} />
          </Switch>
        </Router>
      </div>
      <ScrollToTopBtn />
    </UserSessionProvider>
  );
}

export default App;
