import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import Timeline from "../timeline/timeline";

class Wedding extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />

				<main className="wedding-object footer-padding px-3 min-vh-100">
					<Timeline />
				</main>

				<Footer />
			</>
		);
	}
}

Wedding.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(Wedding);
