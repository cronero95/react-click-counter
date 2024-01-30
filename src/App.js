import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';

function App() {

  const addClick = () => {
    console.log('Click');
  }

  const resetClick = () => {
    console.log('Reset');
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
