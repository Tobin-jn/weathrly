import React, { Component } from 'react';

import Search from './Search';

export default class Header extends Component {
  constructor () {
    super();

  }


  render() {
    return(
      <header>
        <img />
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
        <Search />
      </header>
    );
  }
}