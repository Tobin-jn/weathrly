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
        <Search changeSelectedLocation={this.props.changeSelectedLocation}/>
      </header>
    );
  }
}