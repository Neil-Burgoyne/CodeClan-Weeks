import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [squaredNumber, setSquaredNumber] = useState(1);

  useEffect(() => {
    console.log('useEffect running');
    setSquaredNumber(number*number);
  }, [number]);

  function incrementNumer() {
    setNumber(number+1);
  }

  function decrementNumber() {
    setNumber(number-1);
  }

  function doNothing() {
    setNumber(number);
  }

  return (
    <div className="App">
      <p>The number is {number}</p>
      <p>{number} squared is {squaredNumber}</p>
      <button onClick={decrementNumber}>-</button>
      <button onClick={incrementNumer}>+</button>
      <button onClick={doNothing}>=</button>
    </div>
  );
}

export default App;
