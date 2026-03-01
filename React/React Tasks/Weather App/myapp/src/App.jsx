import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
}) => {
  return (
    <>
      <div className="image">
        <span>{icon}</span>
      </div>
      <div className="temp">
        <span>{temp} °C</span>
      </div>
      <div className="location">
        <span>{city}</span>
      </div>
      <div className="country">
        <span>{country}</span>
      </div>
      <div className="cord">
        <div>
          <span className="lat">Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data">
        <div className="data-container">
          <div className="element">
            <div className="icon">🌡️</div>
            <div className="data-info">
              <div className="humidity">Humidity</div>
              <div className="percentage">{humidity}%</div>
            </div>
          </div>
        </div>
        <div className="data-container">
          <div className="element">
            <div className="icon">💨</div>
            <div className="data-info">
              <div className="wind">Wind Speed</div>
              <div className="percentage">{wind} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WeatherDetails.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  lat: PropTypes.number,
  log: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
};

const App = () => {
  let apikey = "9fd74dcec2c0a632d87e13f6559e63cd";

  const [text, setText] = useState("channai");
  const [icon, setIcon] = useState("❄️");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Delhi");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const wheatherIconMap = {
    "01": "☀️",
    "02": "🌤️",
    "03": "☁️",
    "04": "☁️",
    "09": "🌧️",
    10: "🌦️",
    11: "🌩️",
    13: "❄️",
    50: "🌫️",
  };

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      if (data.cod === "404") {
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setCityNotFound(false);

      setIcon(`🌡️`);
      setTemp(data.main.temp);

      setCity(data.name);

      setCountry(data.sys.country);

      setLat(data.coord.lat);
      setLog(data.coord.lon);

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      const weatherCode = data.weather[0].icon;
      const weatherIcon = wheatherIconMap[weatherCode];
      setIcon(weatherIcon || "❄️");

      setCityNotFound(false);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setText("");
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Weather App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search City"
            className="cityInput"
            value={text}
            onChange={handleCity}
            onKeyDown={handleKeyDown}
          />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <span>🔍</span>
          </div>
        </div>
        {loading && (
          <div className="loading-message">{loading && <p>Loading...</p>}</div>
        )}

        {cityNotFound && (
          <div className="city-not-found">
            <p>City Not Found</p>
          </div>
        )}

        {!loading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={log}
            humidity={humidity}
            wind={wind}
          />
        )}
      </div>
    </>
  );
};

export default App;

// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

// 9fd74dcec2c0a632d87e13f6559e63cd
