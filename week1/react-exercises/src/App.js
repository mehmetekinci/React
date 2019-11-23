import React from 'react';
import './App.css';
import HobbyList from './component/HobbyList';
import Guarantee from './component/Guarentee';
import Counter from './component/Counter';
import free_delivery from './exercise_images/f-delivery.png';
import coins from './exercise_images/coin.png';
import chat from './exercise_images/chat.png';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
function App() {
  return (
    <div className="App">
      <div>
        <HobbyList hobbies={hobbies} />
      </div>
      <div>
        <h2>Exercise 2 : Perfect customer service!</h2>
        <div className="guarantee-main-container">
          <Guarantee
            img={free_delivery}
            title="Free shipping"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Guarantee
            img={coins}
            title="100% Money back"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Guarantee
            img={chat}
            title="Online Support 24/7"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
      <div>
        <h2>Exercise 3 : It's higher than 10!</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
