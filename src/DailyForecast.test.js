import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import DailyForecast from './DailyForecast';

describe('DailyForecast', () => {
  
  it('should exist', () => {
    const dailyData = [{
      dailyCondition: 'Clear',
      day: 'Monday',
      high: '91',
      low: '62'
    }]

    const wrapper = shallow(<DailyForecast dailyData={dailyData}/>)
    expect(wrapper).toBeDefined()
  })
})