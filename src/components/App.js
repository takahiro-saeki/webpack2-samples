import React, {Component} from 'react';
import request from 'superagent';
import Header from './Header.jsx';
import UUID from 'uuid-js';
import { Input, Menu, Segment, Button, Checkbox, Form } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import {includes} from 'lodash/collection';
const countryUrl = 'http://api.population.io:80/1.0/countries';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.setData = this.setData.bind(this);
    this.onKeyRender = this.onKeyRender.bind(this);
    this.renSuggest = this.renSuggest.bind(this);
    this.init();
    this.state = {
      activeItem: 'home',
      countries: [{value: 'default', text: 'default'}],
      countriesList: 'blank',
      listField: [{text: 'default', value: 'default'}]
    }
  }

  init() {
    request.get(countryUrl, (err, res) => {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(this.fail(err))
        } else {
          resolve(this.setData(res.body.countries))
        }
      })
    });
  }

  fail(data) {
    console.log(data)
  }

  setData(fetch) {
    const initData = []
    fetch.map((data, i) => {
      let box = {value: data, text: data}
      initData.push(box)
    })
    this.setState({countries: initData})
  }

  handleItemClick(e) {
    const data = e.target.textContent.toLowerCase()
    this.setState({activeItem: data})
  }

  onKeyRender(e) {
    this.setState({countriesList: e.target.value})
    const boxDataRen = [];
    this.state.countries.map((data, i) => {
      if(includes(data.value.toLowerCase(), this.state.countriesList)) {
        console.log(data)
        boxDataRen.push(data)
      }
    })
    this.setState({listField: boxDataRen})
  }

  renFieldDom() {
    return (
      <Form>
        <Select placeholder='Select your country' options={this.state.countries} />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

  renSuggest() {
    const loop = this.state.listField.map((data, i) => {
      return (
        <div key={UUID.create()}>{data.value}</div>
      )
    })
    return (
      <section>{loop}</section>
    )
  }

  render() {
    const renField = () => {
      switch(this.state.activeItem) {
        case 'search':
        return this.renSuggest()
        break;
        case 'list':
        return this.renFieldDom()
        break;
        default:
        return 'test'
      }
    }
    const { activeItem } = this.state;
    return (
      <div>
        <Header />
        <Menu pointing>
          <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick} />
          <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick} />
        </Menu>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onKeyUp={this.onKeyRender} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        {renField()}
      </div>
    )
  }
}
