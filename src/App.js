import React, { Component } from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import CurrentForecast from './CurrentForecast'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import { config } from './config.js'
import './App.css';
import { data, cities } from './api';

const key = config.weatherKey;

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false,
      selectedLocation: '',
      verifiedLocation: true,
      cityData: {},  
      hourlyData: {},
      dailyData: {},
      selectedCity: '',
      selectedState: ''
    };
  };

  updateHourlyData = () => {
    const dataPathHourly = Object.values(this.state.cityData)[3];
    const hourCondition = dataPathHourly.map( hour => hour.condition );
    const hour = dataPathHourly.map( hour => hour.FCTTIME.civil );
    const hourlyTemp = dataPathHourly.map( hour => parseInt(hour.temp.english) );
    const hourlyWeatherData = hourlyTemp.map((element, index) => {
      return { 
        hour: hour[index], 
        hourCondition: hourCondition[index], 
        temp: element 
      }
    }).splice(0, 7);

    this.setState({
      hourlyData: hourlyWeatherData
    }) 
  }

  updateDailyData = () => {
    const dataPathDaily = Object.values(this.state.cityData)[2].simpleforecast.forecastday
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
    this.setState({
      dailyData: dailyWeatherData
    })
  }

  componentDidMount = () => {
    let city = this.state.selectedCity;
    let stateAbr = this.state.selectedState
    fetch(`https://api.wunderground.com/api/${key}/conditions/hourly/forecast/10day/q/${stateAbr}/${city}.json`)
      .then(response => response.json())
      .then(response => console.log(response))

      .then(response => {
        this.setState({
          cityData: response
        })
        this.updateHourlyData();
        this.updateDailyData()
      }) 
      .catch(error => {
        console.log(error);
      })   
    }

  checkInputLocation = (input) => {
    if (data.current_observation.display_location.city !== input) {
      this.setState({
      displayingWelcome: false,
      displayingHourlyForecast: false,
      displayingDailyForecast: false,
      verifiedLocation: false
      })
    } else {
      this.changeSelectedLocation(input)
      this.changeToHourly()
    }
  }

  changeSelectedLocation = (location) => {
    let locationArray = location.split(' ');
    console.log(locationArray)
    this.setState({
      selectedCity: locationArray[0].slice(0, -1),
      selectedState: locationArray[1]
    // this.setState({
    //   selectedLocation: location
    })
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
      display = <Welcome 
        changeSelectedLocation={this.changeSelectedLocation}
        changeToHourly={this.changeToHourly}
        checkInputLocation={this.checkInputLocation}
        splitCityAndState ={this.splitCityAndState}

      />
    }

    if (this.state.displayingHourlyForecast){
      display = <HourlyForecast 
        // hourlyWeatherData={hourlyWeatherData}
        displayingHourlyForecast = {this.state.displayingHourlyForecast}
        cityData = {this.state.cityData}
        hourlyData = {this.state.hourlyData}
      />
    } 

    if (this.state.displayingDailyForecast){
      display = <DailyForecast 
        // dailyWeatherData={dailyWeatherData}
        displayingDailyForecast ={this.state.displayingDailyForecast}
        cityData = {this.state.cityData}
        dailyData = {this.state.dailyData}
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
              splitCityAndState ={this.splitCityAndState}

            />
            <CurrentForecast 
              selectedLocation={this.state.selectedLocation}
              cityData = {this.state.cityData} />
            <Navigation
              displayingHourlyForecast={this.state.displayingHourlyForecast}
              displayingDailyForecast={this.state.displayingDailyForecast}
              changeToHourly={this.changeToHourly} 
              changeToDaily={this.changeToDaily} 
            />
          </div>
        }
        { display }
      </div>
    );
  }
}

export default App;
