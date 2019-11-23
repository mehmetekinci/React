import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  let [count, setCount] = useState(0);
  let feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div className="counter-container">
      <Count count={count} />
      <h3>{feedback}</h3>
      <Button count={count} setCount={setCount} />
    </div>
  );
}

export default Counter;
