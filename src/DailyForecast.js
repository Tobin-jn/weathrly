import React from 'react';
import './DailyForecast.css'

export default function DailyForecast(props) {
  return(
      <div className='daily-page-container'>
        <h1 className='daily-title'>10 Day Forecast</h1>
        <p className='daily-city'>City</p>
        <section className='daily-card-container'></section>
      </div>
  );
}