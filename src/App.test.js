import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

  it('should render the Welcome component', () => {
 
    wrapper = shallow(<App />)

    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should render the HourlyForecast component', () => {
    wrapper = shallow(<App />)

    wrapper.setState({ 
      displayingWelcome: false,
      displayingHourlyForecast: true 
      })

    expect(wrapper.find('HourlyForecast').length).toEqual(1)
  })

  it('should render the DailyForecast component', () => {
    wrapper = shallow(<App />)

    wrapper.setState({ 
      displayingWelcome: false,
      displayingDailyForecast: true 
      })

    expect(wrapper.find('DailyForecast').length).toEqual(1)
  })

  it('should render the Header component', () => {
    wrapper = shallow(<App />)

    wrapper.setState({ 
      isLoaded: true 
      })

    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('should render the CurrentForecast component', () => {
    wrapper = shallow(<App />)

    wrapper.setState({ 
      isLoaded: true 
      })

    expect(wrapper.find('CurrentForecast').length).toEqual(1)
  })

  it('should render the Navigation component', () => {
    wrapper = shallow(<App />)

    wrapper.setState({ 
      isLoaded: true 
      })

    expect(wrapper.find('Navigation').length).toEqual(1)
  })




})
