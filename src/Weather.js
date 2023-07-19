import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import WeatherDetail from "./WeatherDetail";

function Weather({ weather }) {
  const navigate=useNavigate();

  const updateDetail=()=>{
    navigate(`/weather-detail/${weather.id}`);
  }

  return (
    <div>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}</p>
      <button onClick={updateDetail}>Details</button>
      
      <Routes>
        <Route path={`/weather-detail/:${weather.id}`} element={<WeatherDetail/>}/>
      </Routes>
    
      
      
    </div>
  );
}

export default Weather;
