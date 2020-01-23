import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";

import "../../styles/main.scss";

class Page404 extends Component {
	render() {
		const { location } = this.props;
		return (
			<div>
				<Header pathName={location} />
				<p className="padding-top--xxl">Page Not Found</p>
			</div>
		);
	}
}

Page404.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(Page404);
