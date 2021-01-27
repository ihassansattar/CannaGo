import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LandingScreen from "../pages/LandingScreen";
import OnlineStoreScreen from "../pages/OnlineStoreScreen";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from "../pages/SignupScreen";
import StoreOnlineScreen from '../pages/StoreOnlineScreen'
import SelectedItemScreen from '../pages/SelectedItemScreen'
import EmptyCartScreen from '../pages/EmptyCartScreen'
export default function MyRouts() {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={LandingScreen}/>
                <Route path="/onlinestore" component={OnlineStoreScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/signup" component={SignupScreen}/>
                <Route path="/storeonline" component={StoreOnlineScreen}/>
                <Route path="/selecteditem" component={SelectedItemScreen}/>
                <Route path="/emptycart" component={EmptyCartScreen}/>

            </Switch>
        </Router>
    );
}
