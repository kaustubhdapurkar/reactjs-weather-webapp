import React from "react";
import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fade from "react-reveal/Fade";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

function Dashboard(props) {
  const dataPresent = typeof props.weatherData.name != "undefined";

  return (
    <div className="dashboard__container">
      <div className="dashboard">
        <div>
          {dataPresent ? (
            <Fade bottom>
              <div>
                <Button variant="contained" disabled={true}>
                  <LocationOnIcon color="action" />
                  <div className="city__name">
                    {props.weatherData.name}, {props.weatherData.sys.country}
                  </div>
                </Button>
              </div>
            </Fade>
          ) : (
            <div className="landing__page">
              <div className="thought">
                <div>Climate Is What We Expect,</div>
                <div>Weather Is What We Get.</div>
                <div className="mark__twain">- Mark Twain</div>
              </div>
              <div className="links">
                <IconButton
                  href="https://github.com/kaustubhdapurkar/reactjs-weather-webapp"
                  title="Go To GitHub Repo"
                  target="_blank"
                >
                  <GitHubIcon color="action" />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/ekswaizedd/?hl=en"
                  title="Instagram"
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/kaustubh-dapurkar-107667133/"
                  title="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </div>
            </div>
          )}
        </div>

        <div>
          {dataPresent ? (
            <Fade bottom>
              <div className="weather__icon" border-style="dashed">
                <img
                  src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
                {Math.round((props.weatherData.main.temp - 273.15) * 10) / 10}°C
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>

        <div className="weather__type">
          {dataPresent ? (
            <Fade bottom>
              <div>{props.weatherData.weather[0].main}</div>{" "}
            </Fade>
          ) : (
            ""
          )}
        </div>

        <div className="weather__properties">
          {dataPresent ? (
            <div className="other__properties">
              <Fade bottom>
                <div>
                  Humidity:{" "}
                  {Math.round(props.weatherData.main.humidity * 10) / 10}%
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Real Feel:{" "}
                  {Math.round(
                    (props.weatherData.main.feels_like - 273.15) * 10
                  ) / 10}
                  °C
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Wind Speed:{" "}
                  {Math.round(props.weatherData.wind.speed * 3.6 * 10) / 10}{" "}
                  kmph
                </div>
              </Fade>
            </div>
          ) : (
            ""
          )}
          {dataPresent ? (
            <div className="more__properties">
              <Fade bottom>
                <div>
                  Visibility:{" "}
                  {Math.round(props.weatherData.visibility * 10) / 10} m
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Pressure:{" "}
                  {Math.round(props.weatherData.main.pressure * 10) / 10} hPa
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Max:{" "}
                  {Math.round((props.weatherData.main.temp_max - 273.15) * 10) /
                    10}
                  °C
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Min:{" "}
                  {Math.round((props.weatherData.main.temp_min - 273.15) * 10) /
                    10}
                  °C
                </div>
              </Fade>
            </div>
          ) : (
            ""
          )}

          {dataPresent ? (
            <Fade bottom>
              <h5>
                {"<"}
                -------------------------------------------------------------------
                Daily Forecast
                -------------------------------------------------------------------
                {">"}
              </h5>
            </Fade>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
