import React, { Component } from 'react';

import Welcome from './Welcome';
import Header from './Header';
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
    // icon:
    temp: Object.values(data)[3][1].temp.english,
    hour: Object.values(data)[3][1].FCTTIME.hour
  },  
  {
    // icon:
    temp: Object.values(data)[3][2].temp.english,
    hour: Object.values(data)[3][2].FCTTIME.hour
  },  
  {
    // icon:
    temp: Object.values(data)[3][3].temp.english,
    hour: Object.values(data)[3][3].FCTTIME.hour
  },  
  {
    // icon:
    temp: Object.values(data)[3][4].temp.english,
    hour: Object.values(data)[3][4].FCTTIME.hour
  },  
  {
    // icon:
    temp: Object.values(data)[3][5].temp.english,
    hour: Object.values(data)[3][5].FCTTIME.hour
  },  
  {
    // icon:
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
      displayingWelcome: false,
      displayingCurrentForecast: false,
      displayingHourlyForecast: true,
      displayingDailyForecast: false,
      selectedLocation: null,
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
      display = <HourlyForecast hourlyWeatherData={hourlyWeatherData}/>
    }    
    if (this.state.displayingDailyForecast){
      display = <DailyForecast dailyWeatherData={dailyWeatherData}/>
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
