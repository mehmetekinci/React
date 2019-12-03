import React from 'react';

function CityWeather(props) {
  return (
    <div className="weather-container">
      <h2 className="weather-title">
        {props.name}, {props.countryCode}
      </h2>
      <ul className="weather-list">
        {props.weathers.map(weather => {
          return (
            <div>
              <li>
                <b>{weather.main}</b>
              </li>
              <li>{weather.description}</li>
            </div>
          );
        })}
      </ul>
      <ul className="weather-temps-and-coords">
        <li>min temp : {props.temp_min}</li>
        <li>max temp : {props.temp_max}</li>
        <li>
          location : {props.coordLon}, {props.coordLat}
        </li>
      </ul>
    </div>
  );
}
export default CityWeather;
