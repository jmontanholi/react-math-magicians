import React from 'react';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';
import { fireEvent, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../App';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('Renders the NavBar', () => {
    const nav = TestRenderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

  it('Renders calculator page', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('linkCalc'));

    const title = screen.getByTestId('mathTitle');
    expect(title.textContent).toBe("Let's do some Math");
  });

  it('Renders home page', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('linkHome'));

    const title = screen.getByTestId('homeTitle');
    expect(title.textContent).toBe('Welcome To Our Page!');
  });

  it('Renders quote page', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('linkQuote'));

    const title = screen.getByTestId('quoteTitle');
    expect(title.textContent).toBe('Quote of the day:');
  });
});
