import './index.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function MiniTest() {
  const [color, setColor] = useState('red');
  
  const newColor = color === 'red' ? 'blue' : 'red';

  const click = () => {
    setColor(newColor)
  }
  return (
    <div data-testid='MiniTest' className="MiniTest">
      <button onClick={click} style={{backgroundColor: color}}>Change to {newColor}</button>
      <input type='checkbox'/>
    </div>
  );
}

export default MiniTest;
