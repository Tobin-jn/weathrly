import React from 'react';
import './DailyForecast.css'
import Card from './Card'

export default function DailyForecast(props) {
  return(
      <div className='daily-page-container'>
        <h1 className='daily-title'>10 Day Forecast</h1>
        <p className='daily-city'>City</p>
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