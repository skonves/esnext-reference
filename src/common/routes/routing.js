import React from 'react';
import { Route } from 'react-router';
import HelloWorldApp from '../components/HelloWorldApp';
import ShortLink from '../components/ShortLink';
import NumberManager from '../components/NumberManager';

export default (
  <Route component={HelloWorldApp}>
	<Route path="/" components={{ asdf: ShortLink, nm: NumberManager }} />
  </Route>
);
