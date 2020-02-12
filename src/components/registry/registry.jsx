import React, { Component } from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";
import Header from "../header/header";
import Footer from "../footer/footer";
import Modal from "../registry-modal/registry-modal";

class Registry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		const script = document.createElement("script");
		script.id = "script_myregistry_giftlist_iframe";
		script.type = "text/javascript";
		script.async = true;

		script.src =
			"//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=gGw-FVaZYPr8LEDbySaOcQ2&v=2";
		document.querySelector("#registry-stuff").appendChild(script);

		script.onload = this.loadingComplete.bind(this);
	}

	loadingComplete() {
		this.setState({ loading: false });
	}

	render() {
		const { location } = this.props;
		const { loading } = this.state;
		const displayModal = true;
		const override = css`
			display: block;
			margin-left: 30%;
			margin-right: auto;
			position: absolute;
			top: 30%;
		`;

		return (
			<>
				<Header pathName={location} />
				<div className="registry-object">
					<PacmanLoader
						css={override}
						size={150}
						color="rgb(255, 127, 80)"
						loading={loading}
					/>
				</div>
				<Modal displayModal={displayModal} />
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
