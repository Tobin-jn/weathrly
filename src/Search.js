import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      location: null
    }
  }

  render() {
    return (
      <form>
        <input
          type = 'text'
          value = {this.state.location}
          onChange = {(event) => {
            this.setState({
              location: (event.target.value)
            })
          }}
        />
      <button
        onClick={(event) => {
          event.preventDefault();
          this.props.changeSelectedLocation(this.state.location)
        }}
        >Get Weather</button>
      </form>
    );
  }
}