import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Navigation from './Navigation';

describe('Navigation', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper).toBeDefined()
  })
})