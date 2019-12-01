import React, { useState, useEffect } from 'react';
import Joke from './joke';

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [dataStatus, setDataStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        if (!response.ok) {
          throw new Error('Faild to Fetch');
        }
        return response.json();
      })
      .then(data => {
        setJoke(data);
        setDataStatus('success');
      })
      .catch(error => {
        setDataStatus('error');
        setErrorMessage(error.message);
        console.error(error);
      });
  }, []);
  return (
    <div>
      {dataStatus === 'loading' && <h1>Loading...</h1>}
      {dataStatus === 'error' && <h1>{errorMessage}</h1>}
      {dataStatus === 'success' && (
        <Joke joke={joke.setup} answer={joke.punchline} />
      )}
    </div>
  );
}

export default RandomJoke;
