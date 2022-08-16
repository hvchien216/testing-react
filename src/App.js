import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [color, setColor] = useState('red');
  
  const newColor = color === 'red' ? 'blue' : 'red';

  const click = () => {
    setColor(newColor)
  }
  return (
    <div data-testid='App' className="App">
      <button onClick={click} style={{backgroundColor: color}}>Change to {newColor}</button>
      <input type='checkbox'/>
    </div>
  );
}

export default App;
