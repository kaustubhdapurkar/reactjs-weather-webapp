import React, { useState } from "react";
import "./App.css";
import HomeBar from "./HomeBar.js";
import Dashboard from "./Dashboard.js";
import ForecastCard from "./ForecastCard.js";

//https://api.openweathermap.org/data/2.5/weather?q=nagpur&units=metrics&appid=b65a878c4f61b43435abf5beb4ad0835

function App(props) {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  var latitude = "";
  var longitude = "";

  function handleCityNameSubmit(cityName) {
    setCityName(cityName);
  }

  const apiKey = "b65a878c4f61b43435abf5beb4ad0835";

  function fetchWeatherData(e) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metrics&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWeatherData(result);
        latitude = result.coord.lat;
        longitude = result.coord.lon;

        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&%20exclude=minutely,hourly&appid=b65a878c4f61b43435abf5beb4ad0835`
        )
          .then((response) => response.json())
          .then((forecastResult) => {
            setForecastData(forecastResult);
          });
      });
  }

  return (
    <div className="app">
      <div className="app__home">
        <HomeBar
          getWeatherData={fetchWeatherData}
          cityName={cityName}
          onCityNameChange={handleCityNameSubmit}
          forecastData={forecastData}
        />
        <Dashboard weatherData={weatherData} />
        {typeof forecastData.current != "undefined" ? (
          <div className="forecast__card">
            <ForecastCard forecastData={forecastData.daily[1]} />
            <ForecastCard forecastData={forecastData.daily[2]} />
            <ForecastCard forecastData={forecastData.daily[3]} />
            <ForecastCard forecastData={forecastData.daily[4]} />
            <ForecastCard forecastData={forecastData.daily[5]} />
          </div>
        ) : (
          ""
        )}
        {/* ByDay Component */}
        {/* Summary Component */}
      </div>
    </div>
  );
}

export default App;
