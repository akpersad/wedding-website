import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/index/index";
import UsersPage from "./components/users/users";
import Wedding from "./components/wedding/wedding";
import Registry from "./components/registry/registry";
import NotFoundPage from "./components/404/page404";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/wedding" component={Wedding} />
					<Route exact path="/accomodations" component={UsersPage} />
					<Route exact path="/registry" component={Registry} />
					<Route exact path="/rsvp" component={UsersPage} />
					<Route exact path="/404" component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
