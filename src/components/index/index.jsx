import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "../../styles/main.scss";

import Header from "../header/header";
import Footer from "../footer/footer";
import FirstFold from "../first-fold/first-fold";
import CountDown from "../count-down/count-down";

// Functional Component

class MainPage extends Component {
	render() {
		const { location } = this.props;
		const url1 = "https://i.picsum.photos/id/248/3360/1768.jpg?blur=1";
		const url2 = "https://i.picsum.photos/id/250/3360/1768.jpg?blur=1";
		const url3 = "https://i.picsum.photos/id/254/3360/1768.jpg?blur=1";

		return (
			<>
				<Header pathName={location} />

				<main className="footer-padding">
					<FirstFold bkgdImage={url1} cmp={<CountDown />} />

					<FirstFold bkgdImage={url2} />

					<FirstFold bkgdImage={url3} />
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
