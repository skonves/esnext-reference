import actionTypes from '../constants/actionTypes';
import defaultState from '../state';

function addLink(state, action) {
	let newState = { ...state };

	newState.links = newState.links || [];
	newState.links.push(action.payload.url);

	return newState;
}

export default function (state = defaultState, action) {
	switch (action.type) {
		case actionTypes.ADD_LINK:
			return addLink(state, action);
		default:
			return state;
	}
}
