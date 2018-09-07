import React, { Component } from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Footer from './Footer';
import CurrentForecast from './CurrentForecast'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import './App.css';
import { data } from './api';

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: false,
      displayingCurrentForecast: false,
      displayingHourlyForecast: true,
      displayingDailyForecast: false,
      selectedLocation: null,
      // weatherData = data
    }
  }

  changeSelectedLocation = (location) => {
    this.setState({
      selectedLocation: location
    });
  }

  changeToCurrent = () => {
    this.setState({
      displayingCurrentForecast: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false
    });
  }

  changeToHourly = () => {
    this.setState({
      displayingCurrentForecast: false,
      displayingHourlyForecast: true,
      displayingDailyForecast: false
    });
  }

  changeToDaily = () => {
    this.setState({
      displayingCurrentForecast: false,
      displayingHourlyForecast: false,
      displayingDailyForecast: true
    });
  }

  render() {
    let display;

    if (this.state.displayingWelcome){
      display = <Welcome />
    }
    if (this.state.displayingCurrentForecast){
      display = <CurrentForecast selectedLocation={this.state.selectedLocation}/>
    }
    if (this.state.displayingHourlyForecast){
      display = <HourlyForecast />
    }    
    if (this.state.displayingDailyForecast){
      display = <DailyForecast />
    }

    return (
      <div className="App">
        {!this.state.displayingWelcome && 
          <Header 
          changeSelectedLocation={this.changeSelectedLocation}
          changeToCurrent={this.changeToCurrent} 
          changeToHourly={this.changeToHourly} 
          changeToDaily={this.changeToDaily}/>}
        { display }
        {!this.state.displayingWelcome && <Footer />}
      </div>
    );
  }
}

export default App;
