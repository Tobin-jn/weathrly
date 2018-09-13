import React, { Component } from 'react';

import Search from './Search';
import './Header.css';


export default class Header extends Component {

  render() {

    return (
      <header className='header-container'>
        <h1 className='header-title'>Weathrly</h1>
        <Search 
          changeToHourly={this.props.changeToHourly}
          fetchWeather={this.props.fetchWeather}
          isLoaded={this.props.isLoaded}
        />
      </header>
    );
  }
}