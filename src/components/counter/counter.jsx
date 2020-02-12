import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends Component {
	// state = { count: 0 }; // remove this

	increment() {
		const { dispatch } = this.props;
		dispatch({ type: "INCREMENT" });
	}

	decrement() {
		const { dispatch } = this.props;
		dispatch({ type: "DECREMENT" });
	}

	render() {
		const { count } = this.props;
		return (
			<div className="counter">
				<h2>Counter</h2>
				<div>
					<button type="button" onClick={this.decrement.bind(this)}>
						-
					</button>
					<span className="count">
						{
							// Replace state:
							// this.state.count
							// With props:
							count
						}
					</span>
					<button type="button" onClick={this.increment.bind(this)}>
						+
					</button>
				</div>
			</div>
		);
	}
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	dispatch: PropTypes.any.isRequired
};

function mapStateToProps(state) {
	return {
		count: state.count
	};
}

export default connect(mapStateToProps)(Counter);
