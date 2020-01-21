import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.scss";

import j$ from "jquery";
import { FaBars, FaCaretDown, FaCaretRight } from "react-icons/fa";

class Header extends Component {
	componentDidMount() {
		function isExists(elem) {
			if (j$(elem).length > 0) {
				return true;
			}
			return false;
		}

		function countdownTime() {
			if (isExists("#clock")) {
				j$("#clock").countdown("2018/01/01", function(event) {
					j$(this).html(
						event.strftime(
							"" +
								'<div class="time-sec"><span class="title">%D</span> days </div>' +
								'<div class="time-sec"><span class="title">%H</span> hours </div>' +
								'<div class="time-sec"><span class="title">%M</span> minutes </div>' +
								'<div class="time-sec"><span class="title">%S</span> seconds </div>'
						)
					);
				});
			}
		}

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

			// COUNTDOWN TIME

			countdownTime();

			$("[data-nav-menu]").on("click", function() {
				const $this = $(this);
				const visibleHeadArea = $this.data("nav-menu");

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
		const htmlArray = [];
		for (let i = 0; i < Object.keys(linkLists).length; i++) {
			const currentLinkClass =
				pathName.pathname === Object.keys(linkLists)[i] ? "current" : "not-current";
			htmlArray.push(
				<li key={`${i}-Header-Item`}>
					<Link className={currentLinkClass} to={Object.keys(linkLists)[i]}>
						{linkLists[Object.keys(linkLists)[i]]}
					</Link>
				</li>
			);
		}
		return htmlArray;
	}

	render() {
		const linkLists = { "/": "Home", "/users": "Users" };

		return (
			<>
				<header className="header-object d-md-flex py-3">
					<div className="container">
						<div className="menu-nav-icon" data-nav-menu="#main-menu">
							<FaBars />
						</div>

						<ul className="main-menu visible-on-click float-md-right" id="main-menu">
							{this.setCurrentLink(linkLists)}

							<li>
								<a href="index.html">HOME</a>
							</li>
							<li className="drop-down">
								<a href="#!">
									OUR STORIES
									<FaCaretDown />
								</a>

								<ul className="drop-down-menu">
									<li>
										<a href="/FEATURED">FEATURED</a>
									</li>
									<li>
										<a href="/ABOUT">ABOUT</a>
									</li>
									<li className="drop-down">
										<a href="#!">
											CATEGORIES
											<FaCaretRight />
										</a>
										<ul className="drop-down-menu drop-down-inner">
											<li>
												<a href="/FEATURED">FEATURED</a>
											</li>
											<li>
												<a href="/ABOUT">ABOUT</a>
											</li>
											<li>
												<a href="/CATEGORIES">CATEGORIES</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>

							<li>
								<a href="03-regular-page.html">THER WEDDING</a>
							</li>
							<li>
								<a href="/GELLERY">GELLERY</a>
							</li>
							<li>
								<a href="02-rsvp.html">RSVP</a>
							</li>
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
