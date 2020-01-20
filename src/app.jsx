import React, { Component } from "react";
import "./styles/main.scss";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import MainPage from "./components/index/index";
import UsersPage from "./components/users/users";
import NotFoundPage from "./components/404/page404";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/users" component={UsersPage} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
