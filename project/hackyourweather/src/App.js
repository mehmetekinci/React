import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherDetails from './pages/WeatherDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:cityId">
          <WeatherDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
