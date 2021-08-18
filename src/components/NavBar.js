import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.titleDiv}>
      <h1 className={style.title}>
        Math Magicians
      </h1>
    </div>
    <div className={style.linksDiv}>
      <Link data-testid="linkHome" className={style.link} to="/">Home</Link>
      <Link data-testid="linkCalc" className={`${style.link} ${style.link2}`} to="/calculator">Calculator</Link>
      <Link data-testid="linkQuote" className={style.link} to="/quote">Quote</Link>
    </div>
  </nav>
);

export default NavBar;
