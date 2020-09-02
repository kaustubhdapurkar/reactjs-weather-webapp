import React, { useState } from "react";
import "./App.css";
import HomeBar from "./HomeBar.js";
import Dashboard from "./Dashboard.js";

function App(props) {
  const [cityName, setCityName] = useState("");

  function handleCityNameSubmit(cityName) {
    setCityName(cityName);
  }

  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "b65a878c4f61b43435abf5beb4ad0835";

  async function fetchWeatherData(e) {
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => data);
    setWeatherData({
      data: apiCall,
    });
  }
  const jsonOP = weatherData.data;
  console.log(jsonOP);

  return (
    <div className="app">
      <div className="app__home">
        <HomeBar
          cityName={cityName}
          onCityNameChange={handleCityNameSubmit}
          weatherData={weatherData.data}
        />

        <Dashboard getWeatherData={fetchWeatherData} />

        {/* Dashboard Component */}

        {/* ByDay Component */}

        {/* Summary Component */}
      </div>
    </div>
  );
}

export default App;
