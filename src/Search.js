import React, { Component } from 'react';

import './Search.css';
import Trie from 'boilerplate';
import { cities } from './api.js';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      trie: null,
      suggests: null
    }
  }


  componentWillMount() {
    let trie = new Trie();

    trie.populate(cities.data);
    this.setState({trie: trie})
  }

  suggestCity = (string) => {
    let suggests = this.state.trie.suggest(string).slice(0, 10);
    this.setState({suggests: suggests})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.changeSelectedLocation(this.state.selectedCity, this.state.selectedState);
    this.props.fetchWeather(this.state.location);
  }

  returnURLInput = (string) => {
    let location;
    if (parseInt(string)){
      location = string
    } else {
      let locationArray = string.split(' ');
      location = `${locationArray[1]}/${locationArray[0].slice(0, -1)}`
    }
    return location
  }

  render() {
    return (
      <div className={this.props.isLoaded ? 'header-search' : 'welcome-search'}>
        <p className={this.props.isLoaded ? 'hide' : 'welcome-search'}>Enter your city or zipcode to get the weather.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type = 'text'
            list = 'data'
            placeholder = {this.props.selectedLocation ? 'Enter new city or zipcode' : ''}
            onChange = {(event) => {
              let locationValue = this.returnURLInput(event.target.value);
              this.suggestCity(event.target.value);
              this.setState({
                location: locationValue
              })
            }}
          />

          <datalist id='data'>
          { this.state.suggests &&
            this.state.suggests.map((location, index) =>
            <option value={location} key={index}/>
            )}
          </datalist>

        <button>{this.props.isLoaded ? <img src='./icons/search.svg' /> : 'Get Weather'}</button>
        </form>
      </div>
    );
  }
}