import React from 'react';
import { shallow } from 'enzyme';

import DailyForecast from './DailyForecast';

describe('DailyForecast', () => {
  let wrapper;
  
  it('should exist', () => {
    const dailyData = [{
      dailyCondition: 'Clear',
      day: 'Monday',
      high: '91',
      low: '62'
    }];

    wrapper = shallow(<DailyForecast dailyData={dailyData}/>);
    expect(wrapper).toBeDefined();
  });

  it('should render the Card component', () => {
    const dailyData = [{
      dailyCondition: 'Clear',
      day: 'Monday',
      high: '91',
      low: '62'
    }];

    wrapper = shallow(<DailyForecast dailyData={dailyData}/>);

    expect(wrapper.find('Card').length).toEqual(1)
  });
});