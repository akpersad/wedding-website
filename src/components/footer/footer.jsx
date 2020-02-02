import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/main.scss";

import {
	TiSocialGithub,
	TiSocialInstagram,
	TiSocialFlickr,
	TiSocialPinterest,
	TiFeather
} from "react-icons/ti";

import backgroundImage from "../../images/footerBackground.png";

class Footer extends Component {
	render() {
		const style = {
			backgroundImage: `url(${backgroundImage})`
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

						<ul className="footer-links">
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<a href="/#">OUR STORIES</a>
							</li>
							<li>
								<a href="/#">THE WEDDING</a>
							</li>
							<li>
								<a href="/#">GALLERY</a>
							</li>
							<li>
								<a href="/#">CONTACT</a>
							</li>
						</ul>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
