import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import Sample from './components/Sample';
import ApiTest from './components/test';
import Root from './Root';

const ren = render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/sample" component={Sample} />
      <Route path="/test" component={ApiTest} />
    </Router>
  </AppContainer>, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', ren);
}
