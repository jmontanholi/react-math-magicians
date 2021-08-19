import React, { useState } from 'react';
import style from './QuotesPage.module.css';

const QuotesPage = () => {
  const [quote, setQuote] = useState('Pure mathematics is, in its way, the poetry of logical ideas.');
  const [author, setAuthor] = useState('Albert Einstein, German theoretical physicist');
  const changeQuote = async () => {
    const response = await fetch('https://random-math-quote-api.herokuapp.com');
    const result = await response.json();
    const data = await result;
    setQuote(data.quote);
    setAuthor(data.author);
  };

  return (
    <div className={style.div}>
      <h2 data-testid="quoteTitle">
        Quote of the day:
      </h2>
      <h2>
        <p className={style.quote}>
          { quote }
        </p>
        <p>
          -
          {' '}
          {author}
        </p>
      </h2>
      <button className={style.button} type="button" onClick={() => { changeQuote(); }}>New Quote</button>
    </div>
  );
};

export default QuotesPage;
