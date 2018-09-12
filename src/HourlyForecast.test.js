import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import HourlyForecast from './HourlyForecast';

describe('HourlyForecast', () => {
  
  it('should exist', () => {
    const hourlyData = [{
      hour: '5:00',
      hourCondition: 'Clear',
      temp: '93'
    }]

    const wrapper = shallow(<HourlyForecast hourlyData={hourlyData} />)
    expect(wrapper).toBeDefined()
  })
})