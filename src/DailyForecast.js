import React from 'react';

import './DailyForecast.css'
import Card from './Card'

export default function DailyForecast(props) {
  return(
      <div className='daily-page-container'>
        <section className='daily-card-container'>
          { props.dailyWeatherData.map((day, index) => {
            return (
              <Card 
                dailyWeatherData = {props.dailyWeatherData} 
                day={day} 
                key={index}
                displayingDailyForecast ={props.displayingDailyForecast} 
                />
              )
            })
          }
        </section>
      </div>
  );
}