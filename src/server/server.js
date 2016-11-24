import fs from 'fs';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Router, RouterContext, match } from 'react-router';
import routes from '../common/routes/routing';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from '../common/reducers';

import thunk from 'redux-thunk';

import fetchComponentData from '../common/utils/fetchComponentData';

import { createRepository, getRepository } from '../common/utils/repository';
import authStrategy from './strategies/auth';
import numberStrategy from './strategies/numbers';

createRepository({
	auth: authStrategy,
	numbers: numberStrategy
});

const app = express();

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/api/number', (req, res) => {
	getRepository()
		.numbers('load')
		.then(value => {
			setTimeout(() => {
				res.send({ number: value });
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

app.put('/api/number', (req, res) => {
	const number = req.body.number;
	getRepository()
		.numbers('save', { number })
		.then(value => {
			setTimeout(() => {
				res.sendStatus(204);
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

app.post('/api/login', (req, res) => {
	const { username } = req.body;
	getRepository()
		.auth('login', { username })
		.then(value => {
			setTimeout(() => {
				res.status(200).send(value);
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

app.post('/api/logout', (req, res) => {
	const { username } = req.body;
	getRepository()
		.auth('logout', { username })
		.then(value => {
			setTimeout(() => {
				res.status(200).send(value);
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

// server rendering
app.use((req, res, next) => {

	const store = createStore(combinedReducers, applyMiddleware(thunk));

	// react-router
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

		if (error) {
			return res.status(500).send(error.message);
		}

		if (redirectLocation) {
			return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		}

		if (renderProps == null) {
			// return next('err msg: route not found'); // yield control to next middleware to handle the request
			return res.status(404).send('Not found');
		}

		// console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps, false, 1, true) )
		// console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps.components, false, 3, true) )

		// this is where universal rendering happens,
		// fetchComponentData() will trigger actions listed in static "needs" props in each container component
		// and wait for all of them to complete before continuing rendering the page,
		// hence ensuring all data needed was fetched before proceeding
		//
		// renderProps: contains all necessary data, e.g: routes, router, history, components...
		fetchComponentData(store.dispatch, renderProps.components, renderProps.params)

			.then(() => {

				const initView = renderToString((
					<Provider store={store}>
						<RouterContext {...renderProps} />
					</Provider>
				));

				// console.log('\ninitView:\n', initView);

				let state = JSON.stringify(store.getState());
				// console.log( '\nstate: ', state )

				let page = renderFullPage(initView, state);
				// console.log( '\npage:\n', page );

				return page;

			})

			.then(page => res.status(200).send(page))

			.catch(err => res.end(err.message));
	});
});

function renderFullPage(html, initialState) {
	return `
	<!doctype html>
	<html lang="utf-8">
	  <head>
		<title>Universal Redux Example</title>
		<link rel="shortcut icon" type="image/png" href="assets/images/react.png">
	  </head>
	  <body>
	  <div id="app">${html}</div>
		<script>window.$REDUX_STATE = ${initialState}</script>
		<script src="/dist/bundle.js"></script>
	  </body>
	</html>
	`;
}

// example of handling 404 pages
app.get('*', function (req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) => {
	console.error('Error on request %s %s', req.method, req.url);
	console.error(err.stack);
	res.status(500).send('Server error');
});

process.on('uncaughtException', evt => {
	console.log('uncaughtException: ', evt);
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
});
