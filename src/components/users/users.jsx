import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header";

class UsersPage extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
				<ul>
					{["Alex", "John", "Jaz", "fedrik", "missali"].map(user => {
						return <li key={`${user}-user`}>{user}</li>;
					})}
				</ul>
			</>
		);
	}
}

UsersPage.propTypes = {
	location: PropTypes.string.isRequired
};

export default UsersPage;
