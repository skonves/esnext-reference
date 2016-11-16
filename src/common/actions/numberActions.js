import actionTypes from '../constants/actionTypes';
import Action from '../utils/Action';

export function setNumber(number) {
	return {
		type: actionTypes.SET_NUMBER,
		payload: { number }
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
