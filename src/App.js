import React, { Component } from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import CurrentForecast from './CurrentForecast'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import './App.css';
import { data } from './api';

//Hourly data
const dataPathHourly = Object.values(data)[3];
const hourCondition = dataPathHourly.map( hour => hour.condition );
const hour = dataPathHourly.map( hour => hour.FCTTIME.civil );
const hourlyTemp = dataPathHourly.map( hour => hour.temp.english );
const hourlyWeatherData = hourlyTemp.map((element, index) => {
  return { 
    hour: hour[index], 
    hourCondition: hourCondition[index], 
    temp: element 
  }
}).splice(0, 7);

//Daily Data
const dataPathDaily = Object.values(data)[2].simpleforecast.forecastday
const weekday = dataPathDaily.map( entry => entry.date.weekday );
const dailyCondition = dataPathDaily.map( entry => entry.conditions );
const dailyHigh = dataPathDaily.map( entry => entry.high.fahrenheit );
const dailyLow = dataPathDaily.map( entry => entry.low.fahrenheit );
const dailyWeatherData = weekday.map((day, index) => {
  return { 
    day: day, 
    dailyCondition: dailyCondition[index], 
    high: dailyHigh[index], 
    low: dailyLow[index]
  }
});

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false,
      selectedLocation: ''
    }
  }

  changeSelectedLocation = (location) => {
    this.setState({
      selectedLocation: location
    });
  }

  changeToHourly = () => {
    this.setState({
      displayingWelcome: false,
      displayingHourlyForecast: true,
      displayingDailyForecast: false
    });
  }

  changeToDaily = () => {
    this.setState({
      displayingWelcome: false,
      displayingHourlyForecast: false,
      displayingDailyForecast: true
    });
  }

  render() {
    let display;

    if (this.state.displayingWelcome) {
      console.log('test')
      display = <Welcome 
        changeSelectedLocation={this.changeSelectedLocation}
        changeToHourly={this.changeToHourly}
        />
    }

    if (this.state.displayingHourlyForecast){
      display = <HourlyForecast hourlyWeatherData={hourlyWeatherData}
        displayingHourlyForecast = {this.state.displayingHourlyForecast}
      />
    } 

    if (this.state.displayingDailyForecast){
      display = <DailyForecast dailyWeatherData={dailyWeatherData}
        displayingDailyForecast ={this.state.displayingDailyForecast}
      />
    }

    return (
      <div className="App">
        {!this.state.displayingWelcome && 
          <div>
            <Header 
              changeSelectedLocation={this.changeSelectedLocation}
              changeToHourly={this.changeToHourly}
              selectedLocation={this.state.selectedLocation}
            />
            <CurrentForecast 
              selectedLocation={this.state.selectedLocation} />
            <Navigation
            changeToHourly={this.changeToHourly} 
            changeToDaily={this.changeToDaily} />
          </div>
        }
        { display }
        {!this.state.displayingWelcome && <Footer />}
      </div>
    );
  }
}

export default App;
