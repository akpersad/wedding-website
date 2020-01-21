import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header";

class Page404 extends Component {
	render() {
		const { location } = this.props;
		return (
			<div>
				<Header pathName={location} />
				<p>Page Not Found</p>
			</div>
		);
	}
}

Page404.propTypes = {
	location: PropTypes.string.isRequired
};

export default Page404;
