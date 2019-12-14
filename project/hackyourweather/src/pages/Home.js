import React from 'react';
import FetchCitiesInfo from '../components/FetchCitiesInfo';

function Home() {
  return (
    <div className="Home">
      <h1>Weather</h1>
      <FetchCitiesInfo />
    </div>
  );
}
export default Home;
