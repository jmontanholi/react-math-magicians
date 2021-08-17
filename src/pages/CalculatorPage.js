/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Calculator from '../components/Calculator.js';
import style from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className={style.div}>
    <div className={style.titleDiv}>
      <h2 className={style.title}>
        Let's do some Math
      </h2>
    </div>
    <div className={style.calculatorDiv}>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
