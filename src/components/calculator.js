/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const object = {
    total,
    next,
    operation,
  };

  const handleStateChange = (newState) => {
    if (newState.total != null) {
      setTotal(newState.total);
    }

    setNext(newState.next);

    if (newState.operation != null) {
      setOperation(newState.operation);
    }
  };

  return (
    <div className="calculator">
      <div className="resultShow">
        <p className="resultNumber">
          { total }
          { ' ' }
          { operation }
          { ' ' }
          { next }
        </p>
      </div>
      <button className="number0 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '0')); }}>0</button>
      <button className="number1 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '1')); }}>1</button>
      <button className="number2 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '2')); }}>2</button>
      <button className="number3 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '3')); }}>3</button>
      <button className="number4 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '4')); }}>4</button>
      <button className="number5 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '5')); }}>5</button>
      <button className="number6 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '6')); }}>6</button>
      <button className="number7 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '7')); }}>7</button>
      <button className="number8 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '8')); }}>8</button>
      <button className="number9 numbers" type="button" onClick={() => { handleStateChange(calculate(object, '9')); }}>9</button>
      <button className="buttonAc symbols" type="button" onClick={() => { handleStateChange(calculate(object, 'AC')); }}>AC</button>
      <button className="plusminus symbols" type="button" onClick={() => { handleStateChange(calculate(object, '+/-')); }}>+/-</button>
      <button className="percentage symbols" type="button" onClick={() => { handleStateChange(calculate(object, '%')); }}>%</button>
      <button className="plus symbols" type="button" onClick={() => { handleStateChange(calculate(object, '+')); }}>+</button>
      <button className="minus symbols" type="button" onClick={() => { handleStateChange(calculate(object, '-')); }}>-</button>
      <button className="divide symbols" type="button" onClick={() => { handleStateChange(calculate(object, '÷')); }}>÷</button>
      <button className="multiply symbols" type="button" onClick={() => { handleStateChange(calculate(object, 'x')); }}>x</button>
      <button className="dot symbols" type="button" onClick={() => { handleStateChange(calculate(object, '.')); }}>.</button>
      <button className="equal symbols" type="button" onClick={() => { handleStateChange(calculate(object, '=')); }}>=</button>
    </div>
  );
};

export default Calculator;
