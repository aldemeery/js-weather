import React, { useState, useEffect } from "react";
import Api from "./Api";
import Weather from "./Weather";

const Search = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState({});

    function getWeather() {
        Api.getWeather(location)
            .then((weather) => {
                setLocation("");
                setWeather(weather);
            })
            .catch(() => {
                alert("Location not found!");
                setLocation("");
            });
    }

    useEffect(() => {
        Api.getWeather("London")
            .then((weather) => {
                setWeather(weather);
            })
            .catch(() => {
                alert("Location not found!");
            });
    }, [setWeather]);

    return (
        <div>
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    getWeather();
                }}
            >
                <input
                    type="text"
                    placeholder="Location (e.g. London)"
                    className="search"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
            </form>
            <Weather weather={weather} />
        </div>
    );
};

export default Search;
