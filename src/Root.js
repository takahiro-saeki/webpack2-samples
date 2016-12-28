import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import App from './components/App';
import Sample from './components/Sample';
document.body.style.margin = 0;

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="/sample" component={Sample} />
      </Router>
    )
  }
}
