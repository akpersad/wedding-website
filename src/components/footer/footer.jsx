import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialFlickr,
	TiSocialPinterest,
	TiFeather
} from "react-icons/ti";

import backgroundImage from "../../images/footerBackground.png";

class Footer extends Component {
	setCurrentLink(linkLists) {
		return Object.keys(linkLists).map(value => {
			return (
				<li key={`${value}-Header-Item`}>
					<Link to={value}>{linkLists[value]}</Link>
				</li>
			);
		});
	}

	render() {
		const style = {
			backgroundImage: `url(${backgroundImage})`
		};
		const linkLists = {
			"/": "Home",
			"/wedding": "Wedding Details",
			"/accomodations": "Location & Accomodations",
			"/registry": "Registry",
			"/rsvp": "RSVP"
		};

		return (
			<>
				<footer className="footer-object" style={style}>
					<div className="container center-text">
						<div className="logo-wrapper" />

						<ul className="social-icons">
							<li>
								<a href="/#">
									<TiSocialGithub />
								</a>
							</li>
							<li>
								<a href="/#">
									<TiSocialInstagram />
								</a>
							</li>
							<li>
								<a href="/#">
									<TiSocialFlickr />
								</a>
							</li>
							<li>
								<a href="/#">
									<TiSocialPinterest />
								</a>
							</li>
							<li>
								<a href="/#">
									<TiFeather />
								</a>
							</li>
						</ul>

						<ul className="footer-links">{this.setCurrentLink(linkLists)}</ul>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
