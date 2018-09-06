import React from 'react';
import './HourlyForecast.css'

export default function HourlyForecast(props) {
  return(
      <div className='hourly-page-container'>
        <h1 className='hourly-title'>7-Hour Forecast</h1>
        <p className='hourly-city'>City</p>
        <section className='hourly-card-container'></section>
      </div>
  );
}