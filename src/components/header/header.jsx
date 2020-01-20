import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import $ from "jquery";
import { FaBars, FaCaretDown, FaCaretRight } from "react-icons/fa";

class Header extends Component {
    setCurrentLink(linkLists) {
        const htmlArray = [];
        for (let i = 0; i < Object.keys(linkLists).length; i++) {
            const currentLinkClass =
                this.props.pathName.pathname === Object.keys(linkLists)[i]
                    ? "current"
                    : "not-current";
            htmlArray.push(
                <li key={`${i}-Header-Item`}>
                    <Link
                        className={currentLinkClass}
                        to={Object.keys(linkLists)[i]}
                    >
                        {linkLists[Object.keys(linkLists)[i]]}
                    </Link>
                </li>
            );
        }
        return htmlArray;
    }

    componentDidMount() {
        (function($) {
            "use strict";

            // JQUERY LIGHT BOX

            if ($.isFunction($.fn.fluidbox)) {
                $("a").fluidbox();
            }

            $('a[href="#"]').on("click", function(event) {
                return;
            });

            // COUNTDOWN TIME

            countdownTime();

            $("[data-nav-menu]").on("click", function(event) {
                var $this = $(this),
                    visibleHeadArea = $this.data("nav-menu");

                $(visibleHeadArea).toggleClass("visible");
            });

            var winWidth = $(window).width();
            dropdownMenu(winWidth);

            $(window).on("resize", function() {
                dropdownMenu(winWidth);
            });

            // Circular Progress Bar

            var isAnimated = false;
        })($);

        function countdownTime() {
            if (isExists("#clock")) {
                $("#clock").countdown("2018/01/01", function(event) {
                    var $this = $(this).html(
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
                $(".main-menu li.drop-down")
                    .on("mouseover", function() {
                        var $this = $(this),
                            menuAnchor = $this.children("a");

                        menuAnchor.addClass("mouseover");
                    })
                    .on("mouseleave", function() {
                        var $this = $(this),
                            menuAnchor = $this.children("a");

                        menuAnchor.removeClass("mouseover");
                    });
            } else {
                $(".main-menu li.drop-down > a").on("click", function() {
                    if ($(this).attr("href") == "#") return false;
                    if ($(this).hasClass("mouseover")) {
                        $(this).removeClass("mouseover");
                    } else {
                        $(this).addClass("mouseover");
                    }
                    return false;
                });
            }
        }

        function isExists(elem) {
            if ($(elem).length > 0) {
                return true;
            }
            return false;
        }

        function initMap() {}
    }

    render() {
        const linkLists = { "/": "Home", "/users": "Users" };

        return (
            <React.Fragment>
                <header className="header-object d-md-flex py-3">
                    <div className="container">
                        <div
                            className="menu-nav-icon"
                            data-nav-menu="#main-menu"
                        >
                            <FaBars />
                        </div>

                        <ul
                            className="main-menu visible-on-click float-md-right"
                            id="main-menu"
                        >
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
                                        <a href="#">FEATURED</a>
                                    </li>
                                    <li>
                                        <a href="#">ABOUT</a>
                                    </li>
                                    <li className="drop-down">
                                        <a href="#!">
                                            CATEGORIES
                                            <FaCaretRight />
                                        </a>
                                        <ul className="drop-down-menu drop-down-inner">
                                            <li>
                                                <a href="#">FEATURED</a>
                                            </li>
                                            <li>
                                                <a href="#">ABOUT</a>
                                            </li>
                                            <li>
                                                <a href="#">CATEGORIES</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="03-regular-page.html">THER WEDDING</a>
                            </li>
                            <li>
                                <a href="#">GELLERY</a>
                            </li>
                            <li>
                                <a href="02-rsvp.html">RSVP</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
