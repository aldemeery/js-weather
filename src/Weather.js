import React from "react";

const Weather = ({ weather }) => {
    return (
        <div>
            <h1 className="location">{weather.location}</h1>
            <div className="info">
                <span className="temp">{weather.temp}°</span>
                <img src={weather.icon} alt="icon" className="icon" />
            </div>
            <div className="min-max">
                Min: {weather.min}° / Max: {weather.max}°
            </div>
        </div>
    );
};

export default Weather;
