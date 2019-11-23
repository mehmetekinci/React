import React from 'react';

function Guarantee(props) {
  return (
    <div className="guarantee-container">
      <img src={props.img} alt="adv_images" />
      <h2 className="guarantee-title"> {props.title}</h2>
      <p className="guarantee-content"> {props.description}</p>
    </div>
  );
}

export default Guarantee;
