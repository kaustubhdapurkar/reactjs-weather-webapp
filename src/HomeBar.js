import { IconButton, TextField } from "@material-ui/core";
import React from "react";
import "./Homebar.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { QueryBuilder } from "@material-ui/icons";

function HomeBar({ cityName, onCityNameChange, weatherData }) {
  function handleChange(e) {
    onCityNameChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cityName);
  }

  return (
    <div className="homebar">
      <div className="homebar__content">
        <div>
          <form onSubmit={handleSubmit}>
            <IconButton disabled={true}>
              <LocationOnIcon color="action" />
            </IconButton>
            <TextField
              id="textfield"
              onChange={handleChange}
              value={cityName}
              size="small"
            />
          </form>
        </div>
        <div>
          <IconButton disabled={true}>
            <p>12:30 IST</p>
            <QueryBuilder color="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default HomeBar;
