import React from 'react';

import './Card.css'
import { weatherConditions } from'./conditions'


export default function Card(props) {
  return (

    <div>
      { 
        props.displayingHourlyForecast &&
        <div>
          <p>{props.hour.temp}&deg;</p>
          <img 
          alt= {props.hour.hourCondition} 
          src= {weatherConditions[props.hour.hourCondition].icon} />
          <p>{props.hour.hour} o'clock</p>
        </div> 
      }
    
      { 
        // {console.log(props.day.dailyCondition)}
        props.displayingDailyForecast &&
        <div>
          <p>{props.day.day}</p>
          <img 
          alt= {props.day.dailyCondition}
          src= {weatherConditions[props.day.dailyCondition].icon} />
          <p>{props.day.high}&deg;</p>
          <p>{props.day.low}&deg;</p>
        </div>
      }
      
    </div>
  );
}

