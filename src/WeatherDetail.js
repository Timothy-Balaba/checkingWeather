import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

function WeatherDetail() {
  const { id } = useParams();
  const theme = useContext(ThemeContext);

  // Sample weather data for demonstration purposes
  const weatherData = {
    1: { city: 'New York', temperature: '25°C', humidity: '50%', wind: '10 km/h' },
    2: { city: 'London', temperature: '20°C', humidity: '60%', wind: '15 km/h' },
    // Add more weather objects as needed
  };

  const weather = weatherData[id];

  if (!weather) {
    return <div>Weather not found</div>;
  }

  const handleThemeChange = (e) => {
    theme.setTheme(e.target.value);
  };

  return (
    <div>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Wind: {weather.wind}</p>
      <p>Current Theme Color: {theme.color}</p>
      <input type="text" value={theme.color} onChange={handleThemeChange} />
      <button onClick={() => theme.setTheme('Red')}>Change Theme</button>
    </div>
  );
}

export default WeatherDetail;
