import React from 'react';

function HobbyList(props) {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">Exercise 1 : Extreme hobbies</h2>
      <ul className="hobbies-list">
        {props.hobbies.map((hobby, index) => {
          console.log(hobby, index);
          return (
            <li className="hobby-name" key={index}>
              {hobby}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HobbyList;
