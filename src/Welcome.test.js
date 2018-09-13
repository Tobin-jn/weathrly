import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Welcome from './Welcome';

describe('Welcome', () => {
  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<Welcome />)
    expect(wrapper).toBeDefined()
  })

  it('should render the Search component', () => {

    wrapper = shallow(<Welcome />)

    expect(wrapper.find('Search').length).toEqual(1)
  })


})