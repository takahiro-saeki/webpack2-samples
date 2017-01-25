import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import Sample from './components/Sample';
document.body.style.margin = 0;

const ren = render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/sample" component={Sample} />
      <Route path="/Japan" component={Sample} />
      <Route path="/America" component={Sample} />
      <Route path="/Canada" component={Sample} />
    </Router>
  </AppContainer>, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', ren);
}
