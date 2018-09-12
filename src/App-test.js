import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
// import 'boilerplate';

describe('App', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

})