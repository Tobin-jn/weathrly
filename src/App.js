import React, { Component } from 'react';

import Welcome from './Welcome';
import Search from './Search';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Welcome />
      <Search />
      <Header />

      </div>
    );
  }
}

export default App;
