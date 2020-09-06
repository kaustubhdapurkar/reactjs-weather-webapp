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
  let cityName,
    countryName,
    temperature,
    weatherIconSrc,
    weatherDescription,
    humidity,
    realFeel,
    windSpeed,
    visibility,
    pressure,
    minimumTemperature,
    maximumTemperature;

  if (dataPresent) {
    cityName = props.weatherData.name;
    countryName = props.weatherData.sys.country;
    weatherIconSrc = `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;
    temperature = Math.round((props.weatherData.main.temp - 273.15) * 10) / 10;
    weatherDescription = props.weatherData.weather[0].main;
    humidity = Math.round(props.weatherData.main.humidity * 10) / 10;
    realFeel =
      Math.round((props.weatherData.main.feels_like - 273.15) * 10) / 10;
    windSpeed = Math.round(props.weatherData.wind.speed * 3.6 * 10) / 10;
    visibility = Math.round(props.weatherData.visibility * 10) / 10;
    pressure = Math.round(props.weatherData.main.pressure * 10) / 10;
    maximumTemperature =
      Math.round((props.weatherData.main.temp_max - 273.15) * 10) / 10;
    minimumTemperature =
      Math.round((props.weatherData.main.temp_min - 273.15) * 10) / 10;
  }

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
                    {cityName}, {countryName}
                  </div>
                </Button>
              </div>
            </Fade>
          ) : (
            <div className="landing__page">
              <div>
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
              <div className="weather__icon">
                <img src={weatherIconSrc} alt="" />
                {temperature}°C
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>

        <div className="weather__type">
          {dataPresent ? (
            <Fade bottom>
              <div>{weatherDescription}</div>{" "}
            </Fade>
          ) : (
            ""
          )}
        </div>

        <div className="weather__properties">
          {dataPresent ? (
            <div className="other__properties">
              <Fade bottom>
                <div>Humidity: {humidity}%</div>|
              </Fade>
              <Fade bottom>
                <div>
                  Real Feel: {realFeel}
                  °C
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>Wind Speed: {windSpeed} kmph</div>
              </Fade>
            </div>
          ) : (
            ""
          )}
          {dataPresent ? (
            <div className="more__properties">
              <Fade bottom>
                <div>Visibility: {visibility} m</div>|
              </Fade>
              <Fade bottom>
                <div>Pressure: {pressure} hPa</div>|
              </Fade>
              <Fade bottom>
                <div>
                  Max. Temp. : {maximumTemperature}
                  °C
                </div>
                |
              </Fade>
              <Fade bottom>
                <div>
                  Min. Temp. : {minimumTemperature}
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
