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
    return (
      <div className={this.props.hourly ? 'thisthing' : ''}>
        <p className='search-instructions'>Enter your city or zipcode to get the weather.</p>
        <form className='search-form-container' onSubmit={this.handleSubmit}>

          <input
            className = 'search-input'
            type = 'text'
            value = {this.state.location}
            onChange = {(event) => {
              this.setState({
                location: (event.target.value)
              })
            }}
          />
        <button className='search-button'>Get Weather</button>
        </form>
      </div>
    );
  }
}