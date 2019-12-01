import React from 'react';

function FriendProfile(props) {
  return (
    <div>
      <ul>
        <img
          src={props.friend.picture.large}
          alt={'picture of ' + props.friend.name.first}
        />
      </ul>
      <ul>First Name : {props.friend.name.first}</ul>
      <ul>Last Name : {props.friend.name.last}</ul>
      <ul>E-mail : {props.friend.email}</ul>
      <ul>Tel : {props.friend.cell}</ul>
      <ul>
        Address : {props.friend.location.street.name},
        {props.friend.location.postcode}, {props.friend.location.city},
        {props.friend.location.state}
      </ul>
      <ul> Country : {props.friend.location.country}</ul>
    </div>
  );
}

export default FriendProfile;
