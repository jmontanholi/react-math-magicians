/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Calculator from '../components/calculator';
import style from './CalculatorPage.module.css';
import NavBar from '../components/NavBar';

const CalculatorPage = () => (
  <div className={style.div}>
    <NavBar />
    <div className={style.titleDiv}>
      <h2 data-testid="mathTitle" className={style.title}>
        Let's do some Math
      </h2>
    </div>
    <div className={style.calculatorDiv}>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
