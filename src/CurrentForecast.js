import React from 'react';
import './CurrentForecast.css'

export default function CurrentForecast(props) {
  return(
      <div className='current-page-container'>
        <h1 className='current-title'>Current Forecast</h1>
        <p className='current-date'>Date</p>
        <img className='current-condition-icon'/>
        
        <p className='current-temp'>Temperature</p>
        <p className='current-high-temp'>High</p>
        <p className='current-low-temp'>Low</p>

        <p className='current-city'>City</p>
        <p className='current-condition-summary'>Summary</p>
      </div>  );
}