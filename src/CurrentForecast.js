import React from 'react';
import './CurrentForecast.css'
import { data } from './api';

export default function CurrentForecast(props) {
  let summary = Object.values(data)[2].txt_forecast.forecastday[0].fcttext
  return(
      <div className='current-page-container'>
        <h1 className='current-title'>Current Forecast</h1>
        <p className='current-date'>{Object.values(data)[2].simpleforecast.forecastday[0].date.monthname} {Object.values(data)[2].simpleforecast.forecastday[0].date.day}, {Object.values(data)[2].simpleforecast.forecastday[0].date.year}</p>
        <img className='current-condition-icon'/>
        
        <p className='current-temp'>{Object.values(data)[1].temp_f}&deg;</p>
        <p className='current-high-temp'>
          High: {Object.values(data)[2].simpleforecast.forecastday[0].high.fahrenheit}&deg;</p>
        <p className='current-low-temp'>
          Low: {Object.values(data)[2].simpleforecast.forecastday[2].low.fahrenheit}&deg;</p>
        <p className='current-city'>{props.selectedLocation}</p>
        <p className='current-condition-summary'>{summary}</p>
      </div>  
    );
}