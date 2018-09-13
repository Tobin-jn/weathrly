import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toBeDefined()
  })
})