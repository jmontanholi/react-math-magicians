import React from 'react';
import style from './QuotesPage.module.css';

const QuotesPage = () => (
  <div className={style.div}>
    <h2>
      <p className={style.quote}>
        Pure mathematics is, in its way, the poetry of logical ideas.
      </p>
      <p>
        — Albert Einstein, German theoretical physicist
      </p>
    </h2>
  </div>
);

export default QuotesPage;
