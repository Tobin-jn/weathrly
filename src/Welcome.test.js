import React from 'react';

import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<Welcome />);
    expect(wrapper).toBeDefined();
  });

  it('should render the Search component', () => {

    wrapper = shallow(<Welcome />);

    expect(wrapper.find('Search').length).toEqual(1);
  });
});