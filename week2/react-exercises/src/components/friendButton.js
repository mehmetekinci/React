import React from 'react';

function FriendButton(props) {
  return (
    <div>
      <button
        className="FriendButton"
        onClick={() => {
          props.onClickForChanges();
        }}
      >
        Get a friend!
      </button>
    </div>
  );
}
export default FriendButton;
