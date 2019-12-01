import React from 'react';

function DogPhoto(props) {
  return (
    <div>
      <img src={props.url} alt="photos" />
    </div>
  );
}

export default DogPhoto;
