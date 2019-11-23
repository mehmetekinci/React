import React from 'react';

function Button(props) {
  return (
    <div className="button-container">
      <button
        className="button-add"
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        Add 1
      </button>
      <button
        className="button-reset"
        onClick={() => {
          props.setCount(0);
        }}
      >
        Reset!
      </button>
    </div>
  );
}

export default Button;
