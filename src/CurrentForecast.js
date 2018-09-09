import React from 'react';
import './CurrentForecast.css'
import { data } from './api';
import { weatherConditions } from'./conditions'

export default function CurrentForecast(props) {
  let summary = Object.values(data)[2].txt_forecast.forecastday[0].fcttext
  return (
    <div>
      <div className='current-container'>
        <div className='current-info'>
          <p className='current-city'>{props.selectedLocation}</p>
          <p className='current-date'>{Object.values(data)[2].simpleforecast.forecastday[0].date.monthname} {Object.values(data)[2].simpleforecast.forecastday[0].date.day}, {Object.values(data)[2].simpleforecast.forecastday[0].date.year}</p>
          <div className='current-temp-data'>
            <p className='current-temp'>{Object.values(data)[1].temp_f}&deg;</p>
              <div className ='current-high-low'>
            <p className='current-high-temp'>
            High: {Object.values(data)[2].simpleforecast.forecastday[0].high.fahrenheit}&deg;</p>
            <p className='current-low-temp'>
            Low: {Object.values(data)[2].simpleforecast.forecastday[2].low.fahrenheit}&deg;</p>
               </div>
           </div>
        </div>
        <div className='current-icon'>
          <img 
            className='current-condition-icon'
            alt= {Object.values(data)[1].weather}
            src= {weatherConditions[Object.values(data)[1].weather].icon}
          />
        </div>
      </div>
      <p className='current-condition-summary'>{summary}</p>
    </div>  
  );
}