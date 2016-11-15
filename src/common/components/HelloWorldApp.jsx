import React, { Component, PropTypes } from 'react';

export default class TodoApp extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<h1>Hello World</h1>
				<span>{this.props.message}</span>
			</div>
		);

		return nodes;
	}
}
