import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "../counter/counter";

class TestRedux extends Component {
	constructor(props) {
		super(props);
		const initialState = {
			count: 0
		};
		this.initialState = initialState;
	}

	reducer(state = this.initialState, action) {
		console.log("Before Reducer", state, action);
		switch (action.type) {
			case "INCREMENT":
				return {
					count: state.count + 1
				};
			case "DECREMENT":
				return {
					count: state.count - 1
				};
			case "RESET":
				return {
					count: 0
				};
			default:
				return state;
		}
	}

	render() {
		const store = createStore(this.reducer.bind(this));

		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}

export default TestRedux;
