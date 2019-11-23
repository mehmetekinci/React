import React from 'react';
import './App.css';
import CityWeather from './components/city-weather';
import citiesInfo from './city-weather.json';

const convertKelvinToCelsius = kelvin =>
  kelvin < 0 ? kelvin : kelvin - 273.15;

function App() {
  return (
    <div className="App">
      <h2>Weather</h2>

      <div className="wheather-tables">
        {citiesInfo.map((cityInfo, index) => {
          return (
            <div>
              <CityWeather
                name={cityInfo.name}
                countryCode={cityInfo.sys.country}
                weathers={cityInfo.weather}
                temp_min={convertKelvinToCelsius(
                  cityInfo.main.temp_min,
                ).toFixed(1)}
                temp_max={convertKelvinToCelsius(
                  cityInfo.main.temp_max,
                ).toFixed(1)}
                coordLon={cityInfo.coord.lon}
                coordLat={cityInfo.coord.lat}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
