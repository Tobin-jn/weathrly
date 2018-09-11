import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: '',
      selectedState: ''
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.props.changeSelectedLocation(this.state.selectedCity, this.state.selectedState)

    this.props.fetchWeather(this.state.selectedCity, this.state.selectedState);

    // this.props.changeToHourly()
  }

  render() {
    return (
      <div className={this.props.isLoaded ? 'header-search' : 'welcome-search'}>
        <p className={this.props.isLoaded ? 'hide' : 'welcome-search'}>Enter your city or zipcode to get the weather.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type = 'text'
            value = {this.state.location}
            placeholder = {this.props.selectedLocation ? 'Enter new city or zipcode' : ''}
            onChange = {(event) => {
              let locationArray = event.target.value.split(' ');
              this.setState({
                selectedCity: locationArray[0].slice(0, -1),
                selectedState: locationArray[1]
              })
            }}
          />
        <button>{this.props.isLoaded ? <img src='./icons/search.svg' /> : 'Get Weather'}</button>
        </form>
      </div>
    );
  }
}