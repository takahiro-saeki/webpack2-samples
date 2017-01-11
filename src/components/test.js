import React, {Component} from 'react';
import request from 'superagent';
import {browserHistory} from 'react-router';
const TEST_URL = 'http://api.population.io:80/1.0/countries';

export default class ApiTest extends Component {
  constructor(props) {
    super(props);
    this.test();
  }

  test() {
    request.get(TEST_URL, (err, res) => {
      console.log(res.body)
    });
  }

  render() {
    return (
      <div>superagentのドメインテスト</div>
    )
  }
}
