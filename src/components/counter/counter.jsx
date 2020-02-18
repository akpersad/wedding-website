import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux-actions/redux-actions";

// TODO: https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6

class Counter extends Component {
	increment() {
		const { dispatch } = this.props;
		dispatch(increment());
	}

	decrement() {
		const { dispatch } = this.props;
		dispatch(decrement());
	}

	reset() {
		const { dispatch } = this.props;
		dispatch(reset());
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
					<span className="count">{count}</span>
					<button type="button" onClick={this.increment.bind(this)}>
						+
					</button>
				</div>
				<button type="button" onClick={this.reset.bind(this)}>
					Reset
				</button>
			</div>
		);
	}
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		count: state.count
	};
};

// const mapDispatchToProps = {
// 	increment,
// 	decrement,
// 	reset
// };

export default connect(mapStateToProps)(Counter);
