import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { OrderDetailsProvider } from './context/OrderDetail';
import OrderEntry from './pages/entry/OrderEntry';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('red');

  const newColor = color === 'red' ? 'blue' : 'red';

  const click = () => {
    setColor(newColor);
  };
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
