import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from 'recharts';
import BackIcon from '../back-arrow.png';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

function WeatherDetails() {
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [cityInfoDetails, setCityInfoDetails] = useState({});
  const [tabChanges, setTabChanges] = useState(true);
  const [infoStatus, setInfoStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { cityId } = useParams();

  useEffect(() => {
    async function getCities() {
      setInfoStatus('loading');
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
        );

        if (!response.ok) {
          throw new Error(
            `Oops...Something went wrong. Please check the fetch link. `,
          );
        }

        const data = await response.json();

        setCityWeatherInfo(data);
        setCityInfoDetails(data.city);
        setInfoStatus('success');
      } catch (error) {
        setInfoStatus('error');
        setErrorMessage(error.message);
      }
    }

    if (cityId) {
      getCities();
    }
  }, [cityId]);

  const handleFiveDaysForecast = () => {
    setTabChanges(true);
  };

  const handleHourlyForecast = () => {
    setTabChanges(false);
  };

  if (cityWeatherInfo.list) {
    cityWeatherInfo.list.map(cityWeatherDetail => {
      const maximum_temp = { maximum_temp: cityWeatherDetail.main.temp_max };
      const temp = { temp: cityWeatherDetail.main.temp };
      const minimum_temp = { minimum_temp: cityWeatherDetail.main.temp_min };
      return Object.assign(cityWeatherDetail, maximum_temp, temp, minimum_temp);
    });
  }

  return (
    <div className="weather-detail-container">
      <div>
        <Link to={`/`}>
          <img className="png-icons back-icon" src={BackIcon} alt="back-icon" />
        </Link>
      </div>
      <div>
        <button
          className="tab"
          onClick={() => {
            handleHourlyForecast();
          }}
        >
          Hourly forecast
        </button>
        <button
          className="tab"
          onClick={() => {
            handleFiveDaysForecast();
          }}
        >
          5 Days forecast
        </button>
      </div>
      {infoStatus === 'error' && <h2>{errorMessage}</h2>}
      <div className="five-days-chart">
        {tabChanges && infoStatus === 'success' && (
          <div style={{ width: '100%' }}>
            <h1>
              5 days forecast for {cityInfoDetails.name},
              {cityInfoDetails.country}
            </h1>
            <LineChart
              width={1400}
              height={300}
              data={cityWeatherInfo.list}
              syncId="anyId"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt_txt" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="temp"
                stroke="#ca9c"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="minimum_temp"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="maximum_temp"
                stroke="#82ca9d"
              />
              <Brush />
            </LineChart>
          </div>
        )}
      </div>
      <div className="hourly-chart">
        {tabChanges === false && infoStatus === 'success' && (
          <div>
            <h1>
              Hourly forecast for {cityInfoDetails.name},
              {cityInfoDetails.country}
            </h1>
            <LineChart
              width={800}
              height={260}
              data={[cityWeatherInfo.list[0]]}
              syncId="anyId"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt_txt" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="temp"
                stroke="#ca9c"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="minimum_temp"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="maximum_temp"
                stroke="#82ca9d"
              />
            </LineChart>
          </div>
        )}
      </div>
    </div>
  );
}
export default WeatherDetails;
