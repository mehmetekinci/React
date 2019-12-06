import React, { useState, useEffect } from 'react';
import CityForm from './CityForm';
import CityWeather from './CityWeather';
import { config } from 'dotenv';
config();

function FetchCitiesInfo() {
  const [cities, setCities] = useState([]);
  const [inputCity, setInputCity] = useState('');
  const [infoStatus, setInfoStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getCities() {
      setInfoStatus('loading');
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
          setCities(c => [data, ...c]);
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

  const handleClick = cityId => {
    const remainCities = cities.filter(city => cityId !== city.id);
    setCities(remainCities);
  };

  return (
    <div>
      <CityForm
        onSubmitCityForm={input => {
          setInputCity(input);
        }}
      />
      {infoStatus === 'loading' && <h1>Loading...</h1>}
      {infoStatus === 'error' && <h1>{errorMessage}</h1>}
      {cities.map(city => (
        <CityWeather
          onClickChange={cityId => {
            handleClick(cityId);
          }}
          key={city.id}
          city={city}
        />
      ))}
    </div>
  );
}
export default FetchCitiesInfo;
