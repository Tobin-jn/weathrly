import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Welcome from './Welcome';

describe('Welcome', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Welcome />)
    expect(wrapper).toBeDefined()
  })
})