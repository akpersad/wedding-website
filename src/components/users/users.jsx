import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import CountDown from "../count-down/count-down";

class UsersPage extends Component {
	render() {
		const { location } = this.props;
		return (
			<>
				<Header pathName={location} />
				<div className="footer-padding">
					<ul className="user-list padding-top--xxxl">
						{["Alex", "John", "Jaz", "fedrik", "missali"].map(user => {
							return <li key={`${user}-user`}>{user}</li>;
						})}
					</ul>

					<CountDown />
				</div>

				<Footer />
			</>
		);
	}
}

UsersPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(UsersPage);
