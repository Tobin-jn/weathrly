import React from 'react';
import './Card.css'

export default function Card(props) {
  return (
      <div>
        <p>{props.hour.temp}&deg;</p>
        <img />
        <p>{props.hour.hour} o'clock</p>
      </div>
  );
}