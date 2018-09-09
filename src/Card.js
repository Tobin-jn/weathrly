import React from 'react';

import './Card.css'
import { weatherConditions } from'./conditions'

export default function Card(props) {
  return (
    <div>
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
        // {console.log(props.day.dailyCondition)}
        props.displayingDailyForecast &&
        <div>
          <p>{props.day.day}</p>
          <img 
          className= 'dailycard-icon'
          alt= {props.day.dailyCondition}
          src= {weatherConditions[props.day.dailyCondition].icon} />
          <p>{props.day.high}&deg;</p>
          <p>{props.day.low}&deg;</p>
        </div>
      }
    </div>
  );
}

