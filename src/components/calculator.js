/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  handleStateChange(newState) {
    if (newState.total != null) {
      this.setState({ total: newState.total });
    }

    this.setState({ next: newState.next });

    if (newState.operation != null) {
      this.setState({ operation: newState.operation });
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="resultShow">
          <p className="resultNumber">
            { total }
            { operation }
            { next }
          </p>
        </div>
        <button className="number0 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '0')); }}>0</button>
        <button className="number1 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '1')); }}>1</button>
        <button className="number2 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '2')); }}>2</button>
        <button className="number3 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '3')); }}>3</button>
        <button className="number4 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '4')); }}>4</button>
        <button className="number5 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '5')); }}>5</button>
        <button className="number6 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '6')); }}>6</button>
        <button className="number7 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '7')); }}>7</button>
        <button className="number8 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '8')); }}>8</button>
        <button className="number9 numbers" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '9')); }}>9</button>
        <button className="buttonAc symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, 'AC')); }}>AC</button>
        <button className="plusminus symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '+/-')); }}>+/-</button>
        <button className="percentage symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '%')); }}>%</button>
        <button className="plus symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '+')); }}>+</button>
        <button className="minus symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '-')); }}>-</button>
        <button className="divide symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '÷')); }}>÷</button>
        <button className="multiply symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, 'x')); }}>x</button>
        <button className="dot symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '.')); }}>.</button>
        <button className="equal symbols" type="button" onClick={() => { this.handleStateChange(calculate(this.state, '=')); }}>=</button>
      </div>
    );
  }
}

export default Calculator;
