import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import WeatherDetail from "./WeatherDetail";

function Weather({ props }) {
  const navigate=useNavigate();

  const updateDetail=()=>{
    navigate(`/weather-detail/${props.id}`);
  }

  return (
    <div>
      <p>City: {props.city}</p>
      <p>Temperature: {props.temperature}</p>
      <button onClick={updateDetail}>Details</button>
      
      <Routes>
        <Route path={`/weather-detail/:${props.id}`} element={<WeatherDetail/>}/>
      </Routes>
    
      
      
    </div>
  );
}

export default Weather;
