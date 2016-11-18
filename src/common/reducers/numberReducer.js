import actionTypes from '../constants/actionTypes';
import defaultState from '../state';

function setNumber(state, action) {
	let newState = { ...state };

	newState.number = action.payload.number;

	return newState;
}

function increment(state, action) {
	let newState = { ...state };

	newState.number = (newState.number || 0) + 1;

	return newState;
}

function decrement(state, action) {
	let newState = { ...state };

	newState.number = (newState.number || 0) - 1;

	return newState;
}

export default function (state = defaultState, action) {
	switch (action.type) {
		case actionTypes.SET_NUMBER:
			return setNumber(state, action);
		case actionTypes.INCREMENT_NUMBER:
			return increment(state, action);
		case actionTypes.DECREMENT_NUMBER:
			return decrement(state, action);
		default:
			return state;
	}
}