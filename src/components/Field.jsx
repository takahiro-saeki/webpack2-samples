import React,{Component} from 'react';
import request from 'superagent';
const url = 'http://api.population.io:80/1.0/countries';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.tests();
  }

  tests() {
    request.get(url, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
  }
});
  }

  render() {
    return (
      <section>テスト</section>
    )
  }
}
