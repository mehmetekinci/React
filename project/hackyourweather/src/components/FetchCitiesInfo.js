import React, { useState, useEffect } from 'react';
import CityForm from './CityForm';
import CityWeather from './CityWeather';

function FetchCitiesInfo() {
  const [cities, setCities] = useState([]);
  const [inputCity, setInputCity] = useState('');
  const [infoStatus, setInfoStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!inputCity) return;

    async function getCities() {
      setInfoStatus('loading');
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
        );

        if (!response.ok) {
          throw new Error(
            `Oops...Something went wrong. Please check the city name. `,
          );
        }

        const data = await response.json();
        setCities(c => [data, ...c]);
        setInfoStatus('success');
      } catch (error) {
        setInfoStatus('error');
        setErrorMessage(error.message);
      }
    }

    getCities();
  }, [inputCity]);

  const handleRemoveCity = cityId => {
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
          onRemoveCity={cityId => {
            handleRemoveCity(cityId);
          }}
          key={city.id}
          city={city}
        />
      ))}
    </div>
  );
}
export default FetchCitiesInfo;
