import React, { useState } from "react";
import "./App.css";
import HomeBar from "./HomeBar.js";
import Dashboard from "./Dashboard.js";
import ForecastCard from "./ForecastCard.js";
import Slide from "react-reveal/Slide";

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
            <Slide bottom cascade>
              <div className="card__cascade">
                <h5>
                  <ForecastCard forecastData={forecastData.daily[1]} />
                </h5>
                <h5>
                  <ForecastCard forecastData={forecastData.daily[2]} />
                </h5>
                <h5>
                  <ForecastCard forecastData={forecastData.daily[3]} />
                </h5>
                <h5>
                  <ForecastCard forecastData={forecastData.daily[4]} />
                </h5>
                <h5>
                  <ForecastCard forecastData={forecastData.daily[5]} />
                </h5>
              </div>
            </Slide>
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
