import React, { useState } from 'react';

function CityForm(props) {
  const [input, setInput] = useState('');

  const handleCityName = e => {
    setInput(e.target.value);
  };

  const handleSubmitChange = e => {
    e.preventDefault();
    props.onSubmitCityForm(input);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmitChange(e);
        }}
      >
        <input
          className="city-input"
          name="Search"
          type="text"
          onChange={entry => {
            handleCityName(entry);
          }}
          value={input}
        />
        <input
          className="city-submit"
          type="submit"
          value="Search"
          size="number"
        />
      </form>
    </div>
  );
}
export default CityForm;
