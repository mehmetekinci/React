import React, { useState } from 'react';

function CityForm(props) {
  const [input, setInput] = useState('');

  const handleCityName = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          className="city-input"
          name="Search"
          type="text"
          placeholder="Please enter a city name!"
          onChange={entry => {
            handleCityName(entry);
          }}
          value={input}
        />
        <input
          className="city-submit"
          type="submit"
          value="Search"
          onClick={e => {
            e.preventDefault();
            props.onSubmitCityForm(input);
          }}
        />
      </form>
    </div>
  );
}
export default CityForm;
