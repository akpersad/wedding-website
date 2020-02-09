import React, { Component } from "react";
import PropTypes from "prop-types";

// import { ClipLoader } from "react-spinners";
import Header from "../header/header";
import Footer from "../footer/footer";

class Registry extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		loading: true
	// 	};
	// }

	componentDidMount() {
		const script = document.createElement("script");
		script.id = "script_myregistry_giftlist_iframe";
		script.type = "text/javascript";
		script.async = true;

		script.src =
			"//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=gGw-FVaZYPr8LEDbySaOcQ2&v=2";
		document.querySelector("#registry-stuff").appendChild(script);

		// script.onload = () => {
		// 	this.state.loading = false;
		// };
	}

	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
				<div className="footer-padding" id="registry-stuff" />
				<Footer />
			</>
		);
	}
}

Registry.propTypes = {
	location: PropTypes.object.isRequired
};

export default Registry;
