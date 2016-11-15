import React from 'react';
import { Route } from 'react-router';
import HelloWorldApp from '../components/HelloWorldApp';

export default (
  <Route component={HelloWorldApp}>
	<Route path="/" components={{ message: 'some hardcoded message' }} />
	<Route path="*" components={{ message: 'page not found' }} />
  </Route>
);
