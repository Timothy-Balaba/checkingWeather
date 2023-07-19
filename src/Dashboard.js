import React, { useState } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Weathers from './Weathers';
import AddJob from './AddJob';
import WeatherDetail from './WeatherDetail';
import { ThemeContext, ThemeProvider } from './ThemeContext';

function Dashboard() {
  const [themeColor, setThemeColor] = useState('Navy');

  return (
    <ThemeProvider>
      <ThemeContext.Provider value={{ color: themeColor, setTheme: setThemeColor }}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/weathers">Weathers</Link>
              </li>
              <li>
                <Link to="/add-job">Add Job</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
          <Route path="/weathers" element={<Weathers/>} />
          <Route path="/add-job" element={<AddJob/>} />
          <Route path="/weather-detail/:id" component={WeatherDetail} />
          </Routes>
         
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default Dashboard;
