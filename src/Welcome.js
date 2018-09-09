import React from 'react';

import Search from './Search'
import './Welcome.css';

export default function Welcome(props) {
  return(
      <div className='container'>
        <h1 className='welcome-header'>Weathrly</h1>
        <Search 
          changeSelectedLocation={props.changeSelectedLocation}
          changeToHourly={props.changeToHourly}
          selectedLocation={props.selectedLocation}
          checkInputLocation={props.checkInputLocation}
        />
      </div>
  );
}