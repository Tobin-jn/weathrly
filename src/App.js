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
      displayingWelcome: false,
      displayingCurrentForecast: true,
      displayingHourlyForecast: false,
      displayingDailyForecast: false
    }
  }

  changeDisplay = () => {
    console.log('test')
    this.setState({displayingWelcome: true})
    
  }

  render() {
    let display;

    if (this.state.displayingWelcome){
      display = <Welcome />
    }
    if (this.state.displayingCurrentForecast){
      display = <CurrentForecast />
    }
    if (this.state.displayingHourlyForecast){
      display = <HourlyForecast />
    }    
    if (this.state.displayingDailyForecast){
      display = <DailyForecast />
    }



    return (
      <div className="App">
        {!this.state.displayingWelcome && <Header changeDisplay={this.changeDisplay}/>}
        { display }
        {!this.state.displayingWelcome && <Footer />}
      </div>

    );
  }
}

export default App;
