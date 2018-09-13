import React from 'react';
import { shallow } from 'enzyme';
import { cityData } from './api';

import CurrentForecast from './CurrentForecast';

describe('CurrentForecast', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<CurrentForecast cityData={cityData}/>);

    expect(wrapper).toBeDefined();
  });
});