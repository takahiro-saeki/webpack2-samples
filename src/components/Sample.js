import React, {Component} from 'react';
import request from 'superagent';
import {browserHistory} from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Headers from './Header.jsx';
import Field from './Field.jsx';
const url = 'http://api.population.io:80/1.0/population/2016/Japan/';

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.init();
    this.state = {
      population: []
    }
  }

  init() {
    console.log(this.props.router)
    request.get(url, (err, res) => {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(console.log(err))
        } else {
          resolve(this.setData(res.body))
        }
      })
    });
  }

  location() {
    browserHistory.push(`/`)
  }

  setData(data) {
    const box = []
    data.map((data, i) => {
      if(data.year > 2017 || data.year < 1980) {
        return false;
      } else {
        const serialize = {
          year: data.year,
          female: data.females,
          male: data.males,
          age: `age: ${data.age}`
        }
        box.push(serialize)
      }
    })
    this.setState({population: box})
    console.log(box)
  }

  render() {
    return (
      <div>
        <Headers />
        <section className="wrapper">
          <h2>country: ---</h2>
          <LineChart width={1024} height={500} data={this.state.population}
            margin={{top: 5, right: 30, left: 20, bottom: 0}}>
            <XAxis dataKey="age" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend height={1}/>
            <Line type="monotone" dataKey="male" stroke="#8884d8" />
            <Line type="monotone" dataKey="female" stroke="#82ca9d" />
          </LineChart>
          <button type='button' onClick={this.location}>back</button>
        </section>
      </div>
    )
  }
}
