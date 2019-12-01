import React from 'react';
import Friend from './components/friend';
import DogGallery from './components/dogGallery';
import RandomJoke from './components/randomJoke';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Exercise 1 : New friend on demand</h1>
      <Friend />
      <hr />
      <h1>Exercise 2: Dog photo gallery</h1>
      <DogGallery />
      <hr />
      <h1>Exercise 3: Random Joke Generator</h1>
      <RandomJoke />
    </div>
  );
}

export default App;
