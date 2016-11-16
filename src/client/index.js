import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from '../common/reducers';

let state = null;

if (window.$REDUX_STATE) {
	// TODO: create immutable objects here
	state = window.$REDUX_STATE;
}

const store = createStore(combinedReducers, state);
