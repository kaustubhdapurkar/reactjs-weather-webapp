import React from "react";
import "./ForecastCard.css";

function ForecastCard(props) {
  console.log(props);
  let date = new Date(props.forecastData.dt * 1000);
  let timestr = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(weekDay[date.getDay()], timestr);
  return (
    <div className="card">
      <div className="card__internal">
        <div className="week__day">{weekDay[date.getDay()]}</div>
        <div className="weather__icon">
          <img
            src={`https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <div className="temperature__range">
          <div className="temperature__max">
            {Math.round((props.forecastData.temp.max - 273.15) * 10) / 10}°
          </div>
          <div className="temperature__min">
            {Math.round((props.forecastData.temp.min - 273.15) * 10) / 10}°
          </div>
        </div>
        <div className="weather__description">
          {props.forecastData.weather[0].main}
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
