import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { cityData } from './api'

import CurrentForecast from './CurrentForecast';

describe('CurrentForecast', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<CurrentForecast cityData={cityData}/>)
    expect(wrapper).toBeDefined()
  })
})