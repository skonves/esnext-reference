import actionTypes from '../constants/actionTypes';
import Action from '../utils/Action';

export function setNumber(number) {
	return {
		type: actionTypes.SET_NUMBER,
		payload: { number }
	};
}

export function setLoadingMessage(message) {
	return {
		type: actionTypes.SET_LOADING_MESSAGE,
		payload: { message }
	};
}

export function increment() {
	return {
		type: actionTypes.INCREMENT_NUMBER
	};
}

export function decrement() {
	return {
		type: actionTypes.DECREMENT_NUMBER
	};
}

export function loadNumber(number) {
	return dispatch => {
		dispatch(setLoadingMessage('loading ...'));
		setTimeout(() => {
			dispatch(setLoadingMessage());
			dispatch(setNumber(number));
		}, 3500);
	};
}
