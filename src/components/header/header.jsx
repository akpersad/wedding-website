import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import j$ from "jquery";
import { FaBars, FaOutdent } from "react-icons/fa";
import Logo from "../../images/website_logo.png";

class Header extends Component {
	componentDidMount() {
		window.addEventListener("scroll", this.scrollFunc);

		function dropdownMenu(winWidth) {
			if (winWidth > 767) {
				j$(".main-menu li.drop-down")
					.on("mouseover", function() {
						const $this = j$(this);
						const menuAnchor = $this.children("a");

						menuAnchor.addClass("mouseover");
					})
					.on("mouseleave", function() {
						const $this = j$(this);
						const menuAnchor = $this.children("a");

						menuAnchor.removeClass("mouseover");
					});
			} else {
				j$(".main-menu li.drop-down > a").on("click", function() {
					if (j$(this).attr("href") === "#") return false;
					if (j$(this).hasClass("mouseover")) {
						j$(this).removeClass("mouseover");
					} else {
						j$(this).addClass("mouseover");
					}
					return false;
				});
			}
		}

		(function($) {
			"use strict";

			// JQUERY LIGHT BOX

			if ($.isFunction($.fn.fluidbox)) {
				$("a").fluidbox();
			}

			$("[data-nav-menu]").on("click", function() {
				const $this = $(this);
				const visibleHeadArea = $this.data("nav-menu");
				const opened = $(".menu-opened");
				const closed = $(".menu-closed");

				if (closed.hasClass("d-none")) {
					opened.addClass("d-none");
					closed.removeClass("d-none");
				} else {
					closed.addClass("d-none");
					opened.removeClass("d-none");
				}

				$(visibleHeadArea).toggleClass("visible");
			});

			const winWidth = $(window).width();
			dropdownMenu(winWidth);

			$(window).on("resize", function() {
				dropdownMenu(winWidth);
			});
		})(j$);
	}

	setCurrentLink(linkLists) {
		const { pathName } = this.props;

		return Object.keys(linkLists).map(value => {
			const currentLinkClass = pathName.pathname === value ? "current" : "not-current";
			return (
				<li key={`${value}-Header-Item`}>
					<Link className={currentLinkClass} to={value}>
						{linkLists[value]}
					</Link>
				</li>
			);
		});
	}

	scrollFunc(event) {
		const scrollPos = event.target.documentElement.scrollTop;
		if (scrollPos > 0) {
			document
				.querySelector(".header-object > .container")
				.classList.remove("set-height_large");
			document
				.querySelector(".header-object > .container")
				.classList.add("set-height_medium");
			document.querySelector(".main-menu").classList.add("header-moved");
			document.querySelector(".logo-dimensions").classList.add("header-moved");
		} else {
			document
				.querySelector(".header-object > .container")
				.classList.remove("set-height_medium");
			document.querySelector(".main-menu").classList.remove("header-moved");
			document.querySelector(".logo-dimensions").classList.remove("header-moved");
			document.querySelector(".header-object > .container").classList.add("set-height_large");
		}
	}

	render() {
		const linkLists = {
			"/": "Home",
			"/wedding": "Wedding Details",
			"/accomodations": "Location & Accomodations",
			"/registry": "Registry",
			"/rsvp": "RSVP"
		};

		return (
			<>
				<header className="header-object d-md-flex">
					<div className="container d-flex justify-content-between align-items-center set-height_large">
						<Link to="/">
							<img className="logo-dimensions" src={Logo} alt="Logo" />
						</Link>

						<div className="menu-nav-icon" data-nav-menu="#main-menu">
							<div className="menu-opened d-none">
								<FaOutdent />
							</div>

							<div className="menu-closed">
								<FaBars />
							</div>
						</div>

						<ul
							className="main-menu visible-on-click float-md-right mobile-ul-display"
							id="main-menu"
						>
							{this.setCurrentLink(linkLists)}
						</ul>
					</div>
				</header>
			</>
		);
	}
}

Header.propTypes = {
	pathName: PropTypes.object.isRequired
};

export default Header;
