// src/components/AQICard.jsx
import React from 'react';

const AQICard = ({ aqiData }) => {
  if (!aqiData) return <div>Loading AQI...</div>;

  // Choose color class based on AQI value
  const getAQIColorClass = (aqi) => {
    if (aqi <= 50) return 'aqi-good';
    if (aqi <= 100) return 'aqi-moderate';
    if (aqi <= 150) return 'aqi-unhealthy-sensitive';
    if (aqi <= 200) return 'aqi-unhealthy';
    if (aqi <= 300) return 'aqi-very-unhealthy';
    return 'aqi-hazardous';
  };

  return (
    <div className={`card aqi-card ${getAQIColorClass(aqiData.aqi)}`}>
      <h2>AQI: {aqiData.aqi}</h2>
      <p>PM2.5: {aqiData.pm25} µg/m³</p>
      <p>PM10: {aqiData.pm10} µg/m³</p>
      <p>NO2: {aqiData.no2} µg/m³</p>
      <p>CO: {aqiData.co} µg/m³</p>
    </div>
  );
};

export default AQICard;
