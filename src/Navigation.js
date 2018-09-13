import React, { Component } from 'react';

import './Navigation.css';

export default class Navigation extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className ='nav-container'>
        <button className={this.props.displayingHourlyForecast ? 
          'nav-button-hourly-selected' : 
          'nav-button-hourly'}
        onClick={this.props.changeToHourly}
        >Hourly</button>
        <button className={this.props.displayingDailyForecast ? 
          'nav-button-daily-selected' : 
          'nav-button-daily'}
        onClick={this.props.changeToDaily}
        >Daily</button>
      </div>
    );
  }
}