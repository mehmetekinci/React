import React, { useState } from 'react';
import DogButton from './dogButton';
import DogPhotos from './dogPhoto';

function DogGallery(props) {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [dataStatus, setDataStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [showDogPhotos, setShowDogPhotos] = useState(true);

  async function getDogPhoto() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Faild to fetch');
      } else {
        const data = await response.json();
        setDogPhotos([...dogPhotos, data.message]);
        setDataStatus('success');
        setShowDogPhotos(false);
      }
    } catch (error) {
      setDataStatus('error');
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      {showDogPhotos && <h1>Get your first dog by clicking the button!</h1>}
      <DogButton
        onClickForChanges={() => {
          getDogPhoto();
        }}
      />
      {dataStatus === 'loading' && <h1>Loading...</h1>}
      {dataStatus === 'error' && <h1>{errorMessage}</h1>}
      {dataStatus === 'success' && <DogPhotos urls={dogPhotos} />}
    </div>
  );
}
export default DogGallery;
