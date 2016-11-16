import React from 'react';
import { Route } from 'react-router';
import HelloWorldApp from '../components/HelloWorldApp';
import ShortLink from '../components/ShortLink';

export default (
  <Route component={HelloWorldApp}>
	<Route path="/" components={{ asdf: ShortLink }} />
  </Route>
);
