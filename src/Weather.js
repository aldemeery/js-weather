import React from 'react'; // eslint-disable-line no-unused-vars

const Weather = ({ weather, unit }) => (
  <div>
    <h1 className="location">{weather.location}</h1>
    <div className="info">
      <span className="temp">{Math.round(weather.temp)}°{unit}</span>
      <img src={weather.icon} alt="icon" className="icon" />
    </div>
    <div className="min-max">
      Min: {Math.round(weather.min)}°{unit} / Max: {Math.round(weather.max)}°{unit}
    </div>
  </div>
);

export default Weather;
