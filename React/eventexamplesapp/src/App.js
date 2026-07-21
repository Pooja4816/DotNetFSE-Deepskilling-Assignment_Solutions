import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Method 1: Increments counter value
  const handleIncrementValue = () => {
    setCounter((prev) => prev + 1);
  };

  // Method 2: Says Hello
  const sayHello = () => {
    alert('Hello! Welcome to React Event Handling session.');
  };

  // Multiple method invocation on Increment button click
  const handleIncrement = () => {
    handleIncrementValue();
    sayHello();
  };

  // Decrement button handler
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  // Function accepting argument
  const handleSayWelcome = (msg) => {
    alert(`Message received: ${msg}! Welcome to React Applications.`);
  };

  // Synthetic Event Handler
  const handleSyntheticEvent = (e) => {
    console.log('Synthetic Event Object:', e);
    alert('I was clicked! (Triggered via Synthetic Event Handler)');
  };

  return (
    <div className="App">
      <h1>Event Examples Application</h1>

      {/* Counter & Multiple Method Invocation */}
      <div className="card">
        <h2>Counter: {counter}</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleIncrement}>
            Increment (Invokes Multiple Methods)
          </button>
          <button className="btn btn-secondary" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>

      {/* Event Function with Arguments */}
      <div className="card">
        <h2>Function with Arguments</h2>
        <button
          className="btn btn-info"
          onClick={() => handleSayWelcome('welcome')}
        >
          Say Welcome
        </button>
      </div>

      {/* Synthetic Event Example */}
      <div className="card">
        <h2>Synthetic Event Example</h2>
        <button className="btn btn-success" onClick={handleSyntheticEvent}>
          OnPress / Click Synthetic Event
        </button>
      </div>

      {/* Currency Convertor Component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
