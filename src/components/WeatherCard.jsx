import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);
  if (!weather) return <div className="text-gray-900 dark:text-gray-100">Loading weather...</div>;

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300">{weather.name}</h2>
      <p className="text-gray-700 dark:text-gray-300 capitalize">{weather.weather[0].description}</p>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">Temperature: {weather.main.temp} °C</p>
        <p className="text-gray-700 dark:text-gray-300">Humidity: {weather.main.humidity} %</p>
        <p className="text-gray-700 dark:text-gray-300">Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;

