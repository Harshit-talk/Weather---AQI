// src/context/WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherData, fetchForecastData } from '../api/weatherAPI';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // Removed location state as it's not used
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherData = await fetchWeatherData(latitude, longitude);
          setWeather(weatherData);
          const forecastData = await fetchForecastData(latitude, longitude);
          setForecast(forecastData);
        },
        (error) => console.error('Geolocation error:', error)
      );
    }
  }, []);

  const updateLocation = async (lat, lon) => {
    console.log('Updating location to:', lat, lon);
    const weatherData = await fetchWeatherData(lat, lon);
    setWeather(weatherData);
    const forecastData = await fetchForecastData(lat, lon);
    setForecast(forecastData);
  };

  return (
    <WeatherContext.Provider value={{ weather, forecast, updateLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
