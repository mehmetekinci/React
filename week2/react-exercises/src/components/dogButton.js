import React from 'react';

function DogButton(props) {
  return (
    <div>
      <button
        className="DogButton"
        onClick={() => {
          props.onClickForChanges();
        }}
      >
        Get a dog!
      </button>
    </div>
  );
}
export default DogButton;
