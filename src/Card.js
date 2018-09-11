import React from 'react';

import './Card.css'
import { weatherConditions } from'./conditions'

export default function Card(props) {
  return (
    <section>
      { 
        props.displayingHourlyForecast &&
        <div className= 'hourly-card'>
          <p className= 'hourly-card-hour'>{props.hour.hour}</p>
          <img 
          className= 'hourly-card-icon'
          alt= {props.hour.hourCondition} 
          src= {weatherConditions[props.hour.hourCondition].icon} />
          <p className= 'hourly-card-temp'>{props.hour.temp}&deg;</p>
        </div> 
      }
      { 
        props.displayingDailyForecast &&
        <div className= 'daily-card'>
          <p className= 'daily-card-day'>{props.day.day}</p>
          <img 
          className= 'daily-card-icon'
          alt= {props.day.dailyCondition}
          src= {weatherConditions[props.day.dailyCondition].icon} />
          <p className= 'daily-card-high'>{props.day.high}&deg;</p>
          <p className= 'daily-card-low'>{props.day.low}&deg;</p>
        </div>
      }
    </section>
  );
}