import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "../../styles/main.scss";

import Header from "../header/header";
import Footer from "../footer/footer";
import FirstFold from "../first-fold/first-fold";
import CountDown from "../count-down/count-down";
import LandingView from "../landing-view/landing-view";

// Functional Component

class MainPage extends Component {
	// Removed code in prod
	randomGen() {
		return [
			Math.floor(Math.random() * Math.floor(999)),
			Math.floor(Math.random() * Math.floor(999)),
			Math.floor(Math.random() * Math.floor(999))
		];
		// "https://i.picsum.photos/id/815/3360/1768.jpg?blur=1"
	}

	render() {
		const { location } = this.props;
		// const [id1, id2, id3] = [...this.randomGen()]; // Remove this as well
		// const url1 = `https://i.picsum.photos/id/${id1}/3360/1768.jpg?blur=1`;
		// const url2 = `https://i.picsum.photos/id/${id2}/3360/1768.jpg?blur=1`;
		// const url3 = `https://i.picsum.photos/id/${id3}/3360/1768.jpg?blur=1`;

		return (
			<>
				<Header pathName={location} />

				<main className="footer-padding">
					<FirstFold topCmp={<LandingView />} bottomCmp={<CountDown />} />

					<FirstFold topCmp={<LandingView />} />
				</main>

				<Footer />
			</>
		);
	}
}

MainPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(MainPage);
