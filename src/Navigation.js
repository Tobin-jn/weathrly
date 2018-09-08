import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor () {
    super();
  }

  render() {
    return(
      <div>
        <button
          onClick={this.props.changeToHourly}
        >7 Hour Forecast</button>
        <button
          onClick={this.props.changeToDaily}
        >10 Day Forecast</button>
      </div>
    );
  }
}