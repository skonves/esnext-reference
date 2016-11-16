import actionTypes from '../constants/actionTypes';

const initialState = {
	links: []
};

function addLink(state, action) {
	let newState = { ...state };

	newState.links = newState.links || [];
	newState.links.push(action.payload.url);

	return newState;
}

export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_LINK:
			return addLink(state, action);
		default:
			return state;
	}
}
