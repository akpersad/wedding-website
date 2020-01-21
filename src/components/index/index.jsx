import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "../header/header";
import FirstFold from "../first-fold/first-fold";

// Functional Component

class MainPage extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
				<FirstFold />
			</>
		);
	}
}

MainPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(MainPage);
