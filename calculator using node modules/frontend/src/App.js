// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleCalculate = async () => {
    try {
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: displayValue }),
      });
      const data = await response.json();
      setDisplayValue(data.result.toString());
    } catch (error) {
      console.error('Error calculating:', error);
    }
  };

  const handleClear = () => {
    if (displayValue !== '0') {
      setDisplayValue('0'); // Clear individual digits, but keep '0' when the display is cleared
    }
  };

  const handleAllClear = () => {
    setDisplayValue('0'); 
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="calculator-name">Calci 2.0</div> {/* Add the calculator name */}
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <button onClick={handleClear} className="c">
            C
          </button>
          <button onClick={handleAllClear} className="ac">
            AC
          </button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>&#247;</button>
          <button onClick={handleCalculate} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

