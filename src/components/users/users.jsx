import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";

import "./users.scss";

class UsersPage extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
				<ul className="user-list">
					{["Alex", "John", "Jaz", "fedrik", "missali"].map(user => {
						return <li key={`${user}-user`}>{user}</li>;
					})}
				</ul>
			</>
		);
	}
}

UsersPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(UsersPage);
