import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      location: null
    }
  }

  render() {
    return (
      <div>
        <p className='search-instructions'>Enter your city or zipcode to get the weather.</p>
        <form className='search-form-container'>
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
        <button className='search-button'
          onClick={(event) => {
            event.preventDefault();
            this.props.changeSelectedLocation(this.state.location)
          }}
          >Get Weather</button>
        </form>
      </div>
    );
  }
}