/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import style from './CalculatorGrid.module.css';

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
    <div className={style.calculator}>
      <div className={style.resultShow}>
        <p className={style.resultNumber}>
          { total }
          { ' ' }
          { operation }
          { ' ' }
          { next }
        </p>
      </div>
      <button className={`${style.number0} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '0')); }}>0</button>
      <button className={`${style.number1} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '1')); }}>1</button>
      <button className={`${style.number2} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '2')); }}>2</button>
      <button className={`${style.number3} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '3')); }}>3</button>
      <button className={`${style.number4} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '4')); }}>4</button>
      <button className={`${style.number5} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '5')); }}>5</button>
      <button className={`${style.number6} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '6')); }}>6</button>
      <button className={`${style.number7} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '7')); }}>7</button>
      <button className={`${style.number8} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '8')); }}>8</button>
      <button className={`${style.number9} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(object, '9')); }}>9</button>
      <button className={`${style.buttonAc} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, 'AC')); }}>AC</button>
      <button className={`${style.plusminus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '+/-')); }}>+/-</button>
      <button className={`${style.percentage} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '%')); }}>%</button>
      <button className={`${style.plus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '+')); }}>+</button>
      <button className={`${style.minus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '-')); }}>-</button>
      <button className={`${style.divide} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '÷')); }}>÷</button>
      <button className={`${style.multiply} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, 'x')); }}>x</button>
      <button className={`${style.dot} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '.')); }}>.</button>
      <button className={`${style.equal} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(object, '=')); }}>=</button>
    </div>
  );
};

export default Calculator;
