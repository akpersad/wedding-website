import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Favicon from "react-favicon";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import FaviconImage from "./images/favicon.png";

import MainPage from "./components/index/index";
import UsersPage from "./components/users/users";
import Wedding from "./components/wedding/wedding";
import Registry from "./components/registry/registry";
import NotFoundPage from "./components/404/page404";

import Reduxer from "./components/test-redux/test-redux";

class App extends Component {
	render() {
		return (
			<Router>
				<Favicon url={FaviconImage} />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/wedding" component={Wedding} />
					<Route exact path="/accomodations" component={UsersPage} />
					<Route exact path="/registry" component={Registry} />
					<Route exact path="/rsvp" component={UsersPage} />
					<Route exact path="/test" component={Reduxer} />
					<Route exact path="/404" component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
