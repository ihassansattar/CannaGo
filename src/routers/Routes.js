import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LandingScreen from "../pages/LandingScreen";
import OnlineStoreScreen from "../pages/OnlineStoreScreen";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from "../pages/SignupScreen";

const hist = createBrowserHistory();

export default function MyRouts(){
  return (
    <div>
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route path="/onlinestore" component={OnlineStoreScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
        </Switch>
      </Router>
    </div>
  );
}

