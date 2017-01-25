import React, {Component} from 'react';
import request from 'superagent';
import {browserHistory} from 'react-router';
import Header from './Header.jsx';
import UUID from 'uuid-js';
import style from '../css/style.css';
import 'flexboxgrid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.check = this.check.bind(this);
    this.location = this.location.bind(this);
    this.state = {
      country: 'Japan',
      japan: true,
      america: false,
      canada: false
    }
  }

  select(e) {
    switch(e.target.textContent) {
      case 'Japan':
        return this.setState({country: 'Japan', japan: true, america: false, canada: false});
        break;
      case 'America':
        return this.setState({country: 'America', japan: false, america: true, canada: false});
        break;
      case 'Canada':
        return this.setState({country: 'Canada', japan: false, america: false, canada: true});
        break;
      default:
        return this.setState({country: 'Japan', japan: true, america: false, canada: false});
        break;
    }
  }

  location() {
    browserHistory.push(`/${this.state.country}`)
  }

  check() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />
        <section className="container-fluid country">
          <ul className="row">
            <li className="col-xs-12 col-sm-6 col-md-4">
              <div className={this.state.japan ? 'active' : ''} onClick={this.select}>Japan</div>
            </li>
            <li className="col-xs-12 col-sm-6 col-md-4">
              <div className={this.state.canada ? 'active' : ''} onClick={this.select}>Canada</div>
              </li>
            <li className="col-xs-12 col-sm-6 col-md-4">
              <div className={this.state.america ? 'active' : ''} onClick={this.select}>America</div>
            </li>
          </ul>
          <div className="row center-md">
            <button type='button' className="col-xs-12 col-md-4 btn" onClick={this.location}>send</button>
            <div onClick={this.check}>check</div>
          </div>
        </section>
      </div>
    )
  }
}
