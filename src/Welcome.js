import React from 'react';

import Search from './Search'
import './Welcome.css';

export default function Welcome(props) {
  return(
      <div className='container'>
        <h1>Welcome</h1>
        <Search />
      </div>
  );
}