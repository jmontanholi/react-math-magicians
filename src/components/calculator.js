/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="resultShow">
          <p className="resultNumber">{result}</p>
        </div>
        <button className="number0 numbers" type="button">0</button>
        <button className="number1 numbers" type="button">1</button>
        <button className="number2 numbers" type="button">2</button>
        <button className="number3 numbers" type="button">3</button>
        <button className="number4 numbers" type="button">4</button>
        <button className="number5 numbers" type="button">5</button>
        <button className="number6 numbers" type="button">6</button>
        <button className="number7 numbers" type="button">7</button>
        <button className="number8 numbers" type="button">8</button>
        <button className="number9 numbers" type="button">9</button>
        <button className="buttonAc symbols" type="button">AC</button>
        <button className="plusminus symbols" type="button">+/-</button>
        <button className="percentage symbols" type="button">%</button>
        <button className="plus symbols" type="button">+</button>
        <button className="minus symbols" type="button">-</button>
        <button className="divide symbols" type="button">/</button>
        <button className="multiply symbols" type="button">X</button>
        <button className="dot symbols" type="button">.</button>
        <button className="equal symbols" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
