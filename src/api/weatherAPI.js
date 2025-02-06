// src/api/weatherAPI.js
import axios from 'axios';

const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};

export const fetchForecastData = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'current,minutely,hourly,alerts',
        appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });
    return response.data.daily; // 7-day forecast data
  } catch (error) {
    console.error('Forecast API Error:', error);
    return [];
  }
};
