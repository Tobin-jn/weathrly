import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toBeDefined()
  })
})