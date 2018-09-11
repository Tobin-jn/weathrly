import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // selectedCity: '',
      // selectedState: '',
      location: ''
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.props.changeSelectedLocation(this.state.selectedCity, this.state.selectedState)

    // this.props.fetchWeather(this.state.selectedCity, this.state.selectedState);
    this.props.fetchWeather(this.state.location);

    // this.props.changeToHourly()
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
      <div className={this.props.selectedLocation ? 'header-search' : 'welcome-search'}>
        <p className={this.props.selectedLocation ? 'hide' : 'welcome-search'}>Enter your city or zipcode to get the weather.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type = 'text'
            placeholder = {this.props.selectedLocation ? 'Enter new city or zipcode' : ''}
            onChange = {(event) => {

                let locationValue = this.returnURLInput(event.target.value)
              this.setState({
                location: locationValue
              })
            }}
          />
        <button>{this.props.selectedLocation ? <img src='./icons/search.svg' /> : 'Get Weather'}</button>
        </form>
      </div>
    );
  }
}