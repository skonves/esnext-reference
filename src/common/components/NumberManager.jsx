import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setNumber, increment, decrement } from '../actions/numberActions';

class NumberManager extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<h1>Number Manager</h1>
				<span>the number is {this.props.number}</span>
				<button onClick={()=>this.props.increment()}>increment</button>
				<button onClick={()=>this.props.decrement()}>decrement</button>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ numberReducer }, ownProps) {
	return {
		number: numberReducer.number
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setNumber: number => {
			dispatch(setNumber(number));
		},
		increment: () => {
			dispatch(increment());
		},
		decrement: () => {
			dispatch(decrement());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberManager);
