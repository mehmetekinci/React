import React, { useState, useEffect } from 'react';
import FriendButton from './friendButton';
import FriendProfile from './friendProfile';

function Friend() {
  const [friend, setFriend] = useState({});
  const [dataStatus, setDataStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  async function getFriend() {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      if (!response.ok) {
        throw new Error('Faild to fetch');
      } else {
        const data = await response.json();
        setFriend(data.results[0]);
        setDataStatus('success');
      }
    } catch (error) {
      setDataStatus('error');
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div>
      {dataStatus === 'error' && <h1>{errorMessage}</h1>}
      {dataStatus === 'success' && <FriendProfile friend={friend} />}
      <FriendButton
        onClickForChanges={() => {
          getFriend();
        }}
      />
    </div>
  );
}

export default Friend;
