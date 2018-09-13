import React from 'react';

import Navigation from './Navigation';
import { shallow } from 'enzyme';

describe('Navigation', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Navigation />);
    
    expect(wrapper).toBeDefined();
  });
});