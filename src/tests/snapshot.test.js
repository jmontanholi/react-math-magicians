import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CalculatorPage from '../pages/CalculatorPage';

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
