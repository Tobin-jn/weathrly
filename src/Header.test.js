import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it('should render the Search component', () => {

    wrapper = shallow(<Header />);

    expect(wrapper.find('Search').length).toEqual(1);
  });
});