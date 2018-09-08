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

const hourlyWeatherData = [
  {
    temp: Object.values(data)[3][0].temp.english,
    hour: Object.values(data)[3][0].FCTTIME.hour
  },
  {
    temp: Object.values(data)[3][1].temp.english,
    hour: Object.values(data)[3][1].FCTTIME.hour
  },  
  {
    temp: Object.values(data)[3][2].temp.english,
    hour: Object.values(data)[3][2].FCTTIME.hour
  },  
  {
    temp: Object.values(data)[3][3].temp.english,
    hour: Object.values(data)[3][3].FCTTIME.hour
  },  
  {
    temp: Object.values(data)[3][4].temp.english,
    hour: Object.values(data)[3][4].FCTTIME.hour
  },  
  {
    temp: Object.values(data)[3][5].temp.english,
    hour: Object.values(data)[3][5].FCTTIME.hour
  },  
  {
    temp: Object.values(data)[3][6].temp.english,
    hour: Object.values(data)[3][6].FCTTIME.hour
  }
]

const dailyWeatherData = [
  {
    temp: Object.values(data)[2].simpleforecast.forecastday[0].high.fahrenheit,
    day: Object.values(data)[2].simpleforecast.forecastday[0].date.weekday,
    condition: Object.values(data)[2].simpleforecast.forecastday[0].conditions
  },
]

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false,
      selectedLocation: null,
    }
  }

  changeSelectedLocation = (location) => {
    this.setState({
      selectedLocation: location
    });
  }

  changeToHourly = () => {
    this.setState({
      displayingHourlyForecast: true,
      displayingDailyForecast: false
    });
  }

  changeToDaily = () => {
    this.setState({
      displayingHourlyForecast: false,
      displayingDailyForecast: true
    });
  }

  render() {
    let display;

    if (this.state.displayingWelcome) {
      display = <Welcome />
    }
    if (this.state.displayingHourlyForecast) {
      display = <HourlyForecast hourlyWeatherData={hourlyWeatherData} />
    }    
    if (this.state.displayingDailyForecast) {
      display = <DailyForecast dailyWeatherData={dailyWeatherData} />
    }

    return (
      <div className="App">
        {!this.state.displayingWelcome && 
          <div>
            <Header changeSelectedLocation={this.changeSelectedLocation}/>
            <CurrentForecast selectedLocation={this.state.selectedLocation} />
          </div>
        }
        {!this.state.displayingWelcome && 
          <Navigation
            changeToHourly={this.changeToHourly} 
            changeToDaily={this.changeToDaily}/>}
        { display }
        {!this.state.displayingWelcome && <Footer />}
      </div>
    );
  }
}

export default App;
