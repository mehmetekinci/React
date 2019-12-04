import React, { useState, useEffect } from 'react';
import CityForm from './CityForm';
import CityWeather from './CityWeather';
import { config } from 'dotenv';
config();

function FetchCitiesInfo() {
  const [cityInfo, setCityInfo] = useState({});
  const [inputCity, setInputCity] = useState('');
  const [infoStatus, setInfoStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const convertKelvinToCelsius = kelvin =>
    kelvin < 0 ? kelvin : kelvin - 273.15;

  useEffect(() => {
    async function getCities() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(
            `Oops...Something went wrong. Please check the city name. `,
          );
        } else {
          const data = await response.json();
          setCityInfo(data);
          setInfoStatus('success');
        }
      } catch (error) {
        setInfoStatus('error');
        setErrorMessage(error.message);
      }
    }

    if (inputCity) {
      getCities();
    }
  }, [inputCity]);

  return (
    <div>
      <CityForm
        onSubmitCityForm={input => {
          setInputCity(input);
        }}
      />
      {infoStatus === 'error' && <h1>{errorMessage}</h1>}
      {infoStatus === 'success' && (
        <CityWeather
          name={cityInfo.name}
          countryCode={cityInfo.sys.country}
          weathers={cityInfo.weather}
          temp_min={convertKelvinToCelsius(cityInfo.main.temp_min).toFixed(1)}
          temp_max={convertKelvinToCelsius(cityInfo.main.temp_max).toFixed(1)}
          coordLon={cityInfo.coord.lon}
          coordLat={cityInfo.coord.lat}
        />
      )}
    </div>
  );
}
export default FetchCitiesInfo;
