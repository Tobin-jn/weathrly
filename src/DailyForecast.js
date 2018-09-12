import React from 'react';

import './DailyForecast.css';
import Card from './Card';

export default function DailyForecast(props) {
  return (
    <div className='daily-page-container'>
      <section className='daily-card-container'>
        { props.dailyData.map((day, index) => {
          return (
            <Card 
              day={day} 
              key={index}
              displayingDailyForecast ={props.displayingDailyForecast} 
              cityData = {props.cityData}
              dailyData = {props.dailyData}
              />
            )
          })
        }
      </section>
    </div>
  );
}