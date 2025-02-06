// src/App.jsx
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import LocationSearch from './components/LocationSearch';
import ThemeSwitcher from './components/ThemeSwitcher';
function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <header className="p-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Weather & AQI Dashboard</h1>
          <ThemeSwitcher />
        </header>

        <LocationSearch />
        <WeatherCard />

        <Forecast />
      </div>
    </WeatherProvider>
  );
}

export default App;
