import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import Api from './Api';
import Weather from './Weather'; // eslint-disable-line no-unused-vars

const Search = () => {
  const [search, setSearch] = useState('London');
  const [location, setLocation] = useState('London');
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState('metric');

  function getWeather() {
    Api.getWeather(location, unit)
      .then((weather) => {
        setWeather(weather);
        document.body.classList = weather.status;
      })
      .catch(() => {
        alert('Location not found!');
      }).finally(() => {
        setSearch('');
      });
  }

  useEffect(() => {
    getWeather();
  }, [unit, location]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setLocation(search);
        }}
      >
        <input
          type="text"
          placeholder="Location (e.g. London,UK)"
          className="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <Weather weather={weather} unit={unit === 'metric' ? 'C' : 'F'} />
      <div className="btn-group">
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (unit !== 'imperial') {
              setUnit('imperial');
            }
          }}
          disabled={unit !== 'metric'}
          >F°</button>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (unit !== 'metric') {
              setUnit('metric');
            }
          }}
          disabled={unit === 'metric'}
        >C°</button>
      </div>
    </div>
  );
};

export default Search;
