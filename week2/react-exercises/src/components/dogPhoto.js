import React from 'react';

function DogPhoto(props) {
  return (
    <div>
      {props.urls.map(url => {
        return <img src={url} alt="photos" />;
      })}
    </div>
  );
}

export default DogPhoto;
