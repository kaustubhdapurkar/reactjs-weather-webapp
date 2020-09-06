import React from "react";
import "./ForecastCard.css";

function ForecastCard(props) {
  let date = new Date(props.forecastData.dt * 1000);
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateInDay = weekDay[date.getDay()];

  let weatherIconSrc = `https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`;

  let maxForecastTemperature =
    Math.round((props.forecastData.temp.max - 273.15) * 10) / 10;

  let minForecastTemperature =
    Math.round((props.forecastData.temp.min - 273.15) * 10) / 10;

  let weatherDescription = props.forecastData.weather[0].main;

  return (
    <div className="card">
      <div className="card__internal">
        <div className="week__day">{dateInDay}</div>
        <div>
          <img src={weatherIconSrc} alt="" />
        </div>
        <div className="temperature__range">
          <div className="temperature__max">{maxForecastTemperature}°</div>
          <div>{minForecastTemperature}°</div>
        </div>
        <div className="weather__description">{weatherDescription}</div>
      </div>
    </div>
  );
}

export default ForecastCard;
