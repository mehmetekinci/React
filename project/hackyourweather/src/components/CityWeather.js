import React from 'react';
import CancelIcon from '../cancel-circle.png';

function CityWeather(props) {
  const { name, sys, weather, main, coord, id } = props.city;

  const convertKelvinToCelsius = kelvin =>
    kelvin < 0 ? kelvin : kelvin - 273.15;

  return (
    <div className="weather-container">
      <button
        onClick={() => {
          props.onClickChange(id);
        }}
        className="icon"
      >
        <img src={CancelIcon} alt="cancel-icon" />
      </button>
      <h2 className="weather-title">
        {name}, {sys.country}
      </h2>
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
