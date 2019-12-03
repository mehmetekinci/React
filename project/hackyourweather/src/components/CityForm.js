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
        <label>
          <input
            name="Search"
            type="text"
            onChange={entry => {
              handleCityName(entry);
            }}
            value={input}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
export default CityForm;
