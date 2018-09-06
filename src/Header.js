import React, { Component } from 'react';

import Search from './Search';
import './Header.css'

export default class Header extends Component {
  constructor () {
    super();
  }

  render() {
    return(
      <header className='header-container'>
        <img className='logo' src='/favicon.ico'/>
        <h1>Weathrly</h1>
        <button
          onClick={this.props.changeToCurrent}
        >Today</button>
        <button
          onClick={this.props.changeToHourly}
        >7 Hour Forecast</button>
        <button
          onClick={this.props.changeToDaily}
        >10 Day Forecast</button>
        <Search changeSelectedLocation={this.props.changeSelectedLocation}/>
      </header>
    );
  }
}