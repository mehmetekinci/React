import React from 'react';
import CloseIcon from '../close-window.png';
import { Link } from 'react-router-dom';

function CityWeather(props) {
  const { name, sys, weather, main, coord, id } = props.city;

  const convertKelvinToCelsius = kelvin =>
    kelvin < 0 ? kelvin : kelvin - 273.15;

  return (
    <div className="weather-container">
      <button
        onClick={() => {
          props.onRemoveCity(id);
        }}
        className="icon"
      >
        <img className="png-icons" src={CloseIcon} alt="Close-icon" />
      </button>
      <Link to={`/${id}`}>
        <h2 className="weather-title">
          {name}, {sys.country}
        </h2>
      </Link>
      <ul className="weather-list">
        {weather.map((weatherDetails, index) => {
          return (
            <li key={index}>
              <div>
                <b>{weatherDetails.main}</b>
              </div>
              <div>{weatherDetails.description}</div>
            </li>
          );
        })}
      </ul>
      <ul className="weather-temps-and-coords">
        <li>min temp : {convertKelvinToCelsius(main.temp_min).toFixed(1)}</li>
        <li>max temp : {convertKelvinToCelsius(main.temp_max).toFixed(1)}</li>
        <li>
          location : {coord.lon}, {coord.lat}
        </li>
      </ul>
    </div>
  );
}
export default CityWeather;
