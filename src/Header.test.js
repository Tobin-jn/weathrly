import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toBeDefined()
  })
})