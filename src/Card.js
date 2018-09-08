import React from 'react';
import './Card.css'

export default function Card(props) {
  return (

    <div>
      { 
        props.displayingHourlyForecast &&
        <div>
          <p>{props.hour.temp}&deg;</p>
          <img alt= {props.hour.hourCondition} />
          <p>{props.hour.hour} o'clock</p>
        </div> 
      }
    
      { 
        props.displayingDailyForecast &&
        <div>
          <p>{props.day.day}</p>
          <img alt= {props.day.dailyCondition} />
          <p>{props.day.high}&deg;</p>
          <p>{props.day.low}&deg;</p>
        </div>
      }
      
    </div>
  );
}

