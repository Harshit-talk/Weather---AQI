// src/components/Forecast.jsx
import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Forecast = () => {
  const { forecast } = useContext(WeatherContext);

  // If forecast is null or empty, display a small message or nothing
  if (!forecast || forecast.length === 0) {
    return <div style={{ margin: '1rem 0' }}>No forecast data available.</div>;
  }

  return (
    <div className="forecast-grid">
      {forecast.slice(0, 7).map((day, index) => (
        <div key={index} className="forecast-card">
          <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>Day: {day.temp.day} °C</p>
          <p>Night: {day.temp.night} °C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
