import React, { Component } from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Footer from './Footer';
import CurrentForecast from './CurrentForecast'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: true,
      displayingCurrentForecast: false,
      displayingHourlyForecast: false,
      displayingDailyForecast: false
    }
  }
  render() {
    let display;
    let header;
    let footer;

    if (this.state.displayingWelcome){
      display = <Welcome />
    }
    if (this.state.displayingCurrentForecast){
      display = <CurrentForecast />
      header = <Header /> 
      footer = <Footer />
    }
    if (this.state.displayingHourlyForecast){
      display = <HourlyForecast />
      header = <Header /> 
      footer = <Footer />
    }    
    if (this.state.displayingDailyForecast){
      display = <DailyForecast />
      header = <Header /> 
      footer = <Footer />
    }


    return (
      <div className="App">
        { header }
        { display }
        { footer }
      </div>

    );
  }
}

export default App;
