import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changeSelectedLocation(this.state.location)
    this.props.changeToHourly()

  }

  render() {
    console.log(this.props)
    return (
      <div className={this.props.selectedLocation ? 'header-search' : 'welcome-search'}>
        <p>Enter your city or zipcode to get the weather.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type = 'text'
            value = {this.state.location}
            onChange = {(event) => {
              this.setState({
                location: (event.target.value)
              })
            }}
          />
        <button>Get Weather</button>
        </form>
      </div>
    );
  }
}