import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import CalculatorPage from '../pages/CalculatorPage';

describe('NavBar', () => {
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

describe('CalculatorPage', () => {
  it('displays a number', () => {
    render(<CalculatorPage />);

    fireEvent.click(screen.getByRole('button', { name: '0' }));

    const display = screen.getByTestId('display');
    expect(display.textContent).toBe('  0');
  });

  it('displays a number', () => {
    render(<CalculatorPage />);

    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    const display = screen.getByTestId('display');
    expect(display.textContent).toBe('12 + ');
  });

  it('displays a number', () => {
    render(<CalculatorPage />);

    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    const display = screen.getByTestId('display');
    expect(display.textContent).toBe('5 - ');
  });

  it('displays a number', () => {
    render(<CalculatorPage />);

    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '÷' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    const display = screen.getByTestId('display');
    expect(display.textContent).toBe('4 ÷ ');
  });
});
