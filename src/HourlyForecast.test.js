import React from 'react';
import { shallow } from 'enzyme';

import HourlyForecast from './HourlyForecast';
import Card from './Card';

describe('HourlyForecast', () => {
  let wrapper;

  it('should exist', () => {
    const hourlyData = [{
      hour: '5:00',
      hourCondition: 'Clear',
      temp: '93'
    }];

    wrapper = shallow(<HourlyForecast hourlyData={hourlyData} />);
    expect(wrapper).toBeDefined();
  });

  it('should render the Card component', () => {
    const hourlyData = [{
      hour: '5:00',
      hourCondition: 'Clear',
      temp: '93'
    }];

    wrapper = shallow(<HourlyForecast hourlyData={hourlyData}/>);
    expect(wrapper.find('Card').length).toEqual(1);
  });
});