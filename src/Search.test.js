import React from 'react';

import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<Search />);
    
    expect(wrapper).toBeDefined();
  });

  // it('should instantiate with default state properties', () => {
  //   const wrapper = shallow(<Search />)
    
  //   expect(wrapper.state()).toEqual({
  //     location: '',
  //     trie: null,
  //     suggests: null
  //   })
  // })

});