// src/components/LocationSearch.jsx
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import axios from 'axios';

const LocationSearch = () => {
  const [city, setCity] = useState('');
  const { updateLocation } = useContext(WeatherContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;
    try {
      // Use OpenWeatherMap's geocoding API to convert city to coordinates
      const response = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
          q: city,
          appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
        },
      });
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        updateLocation(lat, lon);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  return (
    <form className="location-search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default LocationSearch;
