import React from 'react';
import Weather from './Weather';

const weatherData = [
  { id: 1, city: 'New York', temperature: '25°C', humidity: '50%', wind: '10 km/h' },
  { id: 2, city: 'London', temperature: '20°C', humidity: '60%', wind: '15 km/h' },
  // Add more weather objects as needed
];

function Weathers() {
  return (
    <div>
      {weatherData.map((weather) => (
        <Weather key={weather.id} weather={weather} />
      ))}
    </div>
  );
}

export default Weathers;
