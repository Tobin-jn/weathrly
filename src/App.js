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
// import { data, cities } from './api';

const key = config.weatherKey;

class App extends Component {
  constructor () {
    super()

    this.state = {
      displayingWelcome: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false,
      selectedLocation: '',
      cityData: null,  
      hourlyData: [],
      verifiedLocation: '',
      dailyData: [],
      selectedCity: '',
      selectedState: '',
      isLoaded: false
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

  // componentDidMount(url) {
    //when we have local storage
  // }

  fetchWeather = (location) => {
    let url = `https://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location}.json`
    console.log(url)
    
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          cityData: data,
          isLoaded: true,
          displayingWelcome: false,
          displayingHourlyForecast: true,
          displayingDailyForecast: false
        })
        this.updateHourlyData();
        this.updateDailyData();
      })
      // .then(console.log('hi'))
      .catch(err => console.log(err))

  changeSelectedLocation = (city, state) => {
    this.setState({
      selectedCity: city,
      selectedState: state
    });
  }

  changeToHourly = () => {
    this.setState({
      displayingWelcome: false,
      displayingHourlyForecast: true,
      displayingDailyForecast: false
    })
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
        fetchWeather={this.fetchWeather}
        isLoaded={this.props.isLoaded}
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
        {this.state.isLoaded &&  
          <div>
            <Header 
              changeSelectedLocation={this.changeSelectedLocation}
              changeToHourly={this.changeToHourly}
              fetchWeather={this.fetchWeather}
              isLoaded={this.state.isLoaded}
            />
            <CurrentForecast 
              selectedLocation={`${this.state.selectedCity}, ${this.state.selectedState}`}
              cityData = {this.state.cityData}
              selectedCity={this.state.selectedCity}
              selectedState={this.state.selectedState}
            />
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
