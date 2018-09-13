import React from 'react';
import './CurrentForecast.css';
import { weatherConditions } from './conditions';

export default function CurrentForecast(props) {
  let summary = Object.values(props.cityData)[2]
    .txt_forecast.forecastday[0].fcttext;
  let simpleforecastPath = Object.values(props.cityData)[2]
    .simpleforecast.forecastday[0];
  let currentCity = props.cityData.current_observation.display_location.full;
  let datePath = simpleforecastPath.date;
  let tempPath = Object.values(props.cityData)[1].temp_f;
  
  return (
    <div>
      <div className ='current-container'>
        <p className='current-city'>{currentCity} 
          <span className='to-upper-case'>{props.selectedState}</span>
        </p>
        <div className='current-subcontainer'>
          <div className='current-info'>
            <p className='current-date'>
              {datePath.monthname} {datePath.day}, {datePath.year}
            </p>
            <div className='current-temp-data'>
              <p className='current-temp'>{parseInt(tempPath)}&deg;</p>
              <div className ='current-high-low'>
                <p className='current-high-temp'>
                High: {simpleforecastPath.high.fahrenheit}&deg;</p>
                <p className='current-low-temp'>
                Low: {simpleforecastPath.low.fahrenheit}&deg;</p>
              </div>
            </div>
          </div>
        <div className='current-icon'>
          <img 
            className='current-condition-icon'
            alt= {Object.values(props.cityData)[1].weather}
            src= {weatherConditions[Object.values(props.cityData)[1].weather].icon}
          />
          <p className="current-condition">{simpleforecastPath.conditions}</p>
        </div>
      </div>
      <p className='current-condition-summary'>{summary}</p>
      </div>  
    </div>
  );
}