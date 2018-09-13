import React from 'react';

import './HourlyForecast.css';
import Card from './Card';

export default function HourlyForecast(props) {
  return (
    <div className='hourly-page-container'>
      <section className='hourly-card-container'>
        { props.hourlyData.map((hour, index) => {
          return (
            <Card 
              hour={hour} 
              key={index}
              displayingHourlyForecast = {props.displayingHourlyForecast}
              cityData = {props.cityData}
              hourlyData = {props.hourlyData}
            />
          );
        })
        }
      </section>
    </div>
  );
}