import React, { useState } from 'react';
import './App.css';

import FetchCitiesInfo from './components/FetchCitiesInfo';

function App() {
  return (
    <div className="App">
      <h2>Weather</h2>
      <FetchCitiesInfo />
    </div>
  );
}

export default App;
