import React, { useState } from "react";
import "./App.css";
import HomeBar from "./HomeBar.js";
import Dashboard from "./Dashboard.js";
import ForecastCard from "./ForecastCard.js";
import Slide from "react-reveal/Slide";

function App() {
  const apiKey = "b65a878c4f61b43435abf5beb4ad0835";

  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});

  let latitude = "";
  let longitude = "";

  function handleCityNameSubmit(cityName) {
    setCityName(cityName);
  }

  function fetchWeatherData(e) {
    if (cityName !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metrics&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((result) => {
          setWeatherData(result);

          if (result.cod === "404") {
            alert("Enter a Valid City Name");
          } else {
            latitude = result.coord.lat;
            longitude = result.coord.lon;
            fetch(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&%20exclude=minutely,hourly&appid=b65a878c4f61b43435abf5beb4ad0835`
            )
              .then((response) => response.json())
              .then((forecastResult) => {
                setForecastData(forecastResult);
              });
          }
        });
    } else alert("Enter a Valid City Name");
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
      </div>
    </div>
  );
}

export default App;
