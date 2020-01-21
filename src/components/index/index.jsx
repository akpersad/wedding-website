import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Header from "../header/header";

// Functional Component

class MainPage extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
			</>
		);
	}
}

MainPage.propTypes = {
	location: PropTypes.string.isRequired
};

export default MainPage;
