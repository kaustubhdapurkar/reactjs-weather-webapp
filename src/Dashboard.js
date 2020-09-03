import React from "react";
import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Dashboard(props) {
  const dataPresent = typeof props.weatherData.name != "undefined";

  return (
    <div className="dashboard__container">
      <div className="dashboard">
        <div>
          {dataPresent ? (
            <div>
              <Button variant="contained" disabled={true}>
                <LocationOnIcon color="action" />
                <div className="city__name">
                  {props.weatherData.name}, {props.weatherData.sys.country}
                </div>
              </Button>
            </div>
          ) : (
            <div className="landing__page">
              <h2>Enter The Name of Your City</h2>
            </div>
          )}
        </div>

        <div>
          {dataPresent ? (
            <div className="weather__icon" border-style="dashed">
              <img
                src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
              {Math.round((props.weatherData.main.temp - 273.15) * 10) / 10}°C
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="weather__type">
          {dataPresent ? <div>{props.weatherData.weather[0].main}</div> : ""}
        </div>

        <div className="weather__properties">
          {dataPresent ? (
            <div className="other__properties">
              <div>
                Humidity:{" "}
                {Math.round(props.weatherData.main.humidity * 10) / 10}%
              </div>
              |
              <div>
                Real Feel:{" "}
                {Math.round((props.weatherData.main.feels_like - 273.15) * 10) /
                  10}
                °C
              </div>
              |
              <div>
                Wind Speed:{" "}
                {Math.round(props.weatherData.wind.speed * 3.6 * 10) / 10} kmph
              </div>
            </div>
          ) : (
            ""
          )}
          {dataPresent ? (
            <div className="more__properties">
              <div>
                Visibility: {Math.round(props.weatherData.visibility * 10) / 10}{" "}
                m
              </div>
              |
              <div>
                Pressure:{" "}
                {Math.round(props.weatherData.main.pressure * 10) / 10} hPa
              </div>
              |
              <div>
                Max:{" "}
                {Math.round((props.weatherData.main.temp_max - 273.15) * 10) /
                  10}
                °C
              </div>
              |
              <div>
                Min:{" "}
                {Math.round((props.weatherData.main.temp_min - 273.15) * 10) /
                  10}
                °C
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
