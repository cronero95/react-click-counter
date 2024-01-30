import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const addClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetClick = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-wrapper'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='FreeCodeCamp logo'
        />
      </div>
      <div className='click-counter-wrapper'>
        <Counter
          numberOfClicks={numClicks}
        />
        <Button
          text='Click'
          isClickButton={true}
          clickManagement={addClick}
        />
        <Button
          text='Reset'
          isClickButton={false}
          clickManagement={resetClick}
        />
      </div>
    </div>
  );
}

export default App;
