import { IconButton, TextField } from "@material-ui/core";
import React from "react";
import "./Homebar.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fade from "react-reveal/Fade";
import { ReactComponent as ReactLogo } from "./favicon.svg";

function HomeBar({ cityName, onCityNameChange, getWeatherData, forecastData }) {
  function handleChange(e) {
    onCityNameChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    getWeatherData();
  }

  let date;
  let timestr;

  if (typeof forecastData.current != "undefined") {
    date = new Date(forecastData.current.dt * 1000);
    timestr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(date, timestr);
  }

  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="homebar">
      <div className="homebar__content">
        <div>
          {typeof forecastData.current != "undefined" ? (
            <div className="weather__app__icon">
              <Fade bottom>
                <ReactLogo />
              </Fade>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <IconButton disabled={true}>
                <LocationOnIcon color="action" />
              </IconButton>
              <TextField
                id="textfield"
                onChange={handleChange}
                value={cityName}
                size="small"
                placeholder="Enter Your City"
              />
            </form>
          )}
        </div>

        <div className="timestamp">
          {typeof forecastData.current != "undefined" ? (
            <Fade bottom>
              <p>
                {`${weekDay[date.getDay()].substr(0, 3)}, 
              ${month[date.getMonth()].substr(0, 4)} ${date.getDate()},
              ${timestr}`}
              </p>
            </Fade>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeBar;
