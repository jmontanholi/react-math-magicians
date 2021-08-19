import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CalculatorPage from '../pages/CalculatorPage';
import HomePage from '../pages/HomePage';
import QuotePage from '../pages/QuotesPage';

describe('NavBar', () => {
  it('Renders the NavBar', () => {
    const nav = TestRenderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});

describe('Calculator', () => {
  it('Renders the CalculatorPage', () => {
    const calculator = TestRenderer.create(
      <CalculatorPage />,
    ).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Homepage', () => {
  it('Renders the CalculatorPage', () => {
    const homepage = TestRenderer.create(
      <HomePage />,
    ).toJSON();
    expect(homepage).toMatchSnapshot();
  });
});

describe('Quote', () => {
  it('Renders the QuotePage', () => {
    const quotepage = TestRenderer.create(
      <QuotePage />,
    ).toJSON();
    expect(quotepage).toMatchSnapshot();
  });
});
