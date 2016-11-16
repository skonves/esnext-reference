import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Router, Route, RouterContext, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import combinedReducers from '../common/reducers';
import routes from '../common/routes/routing';

let state = null;

if (window.$REDUX_STATE) {
	// TODO: create immutable objects here
	state = window.$REDUX_STATE;
}

const store = createStore(combinedReducers, state);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.querySelector( '.container' )
);
