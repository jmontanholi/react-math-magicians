/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CalculatorPage from './pages/CalculatorPage';
import QuotesPage from './pages/QuotesPage';
import HomePage from './pages/HomePage';

class App extends React.Component {
  render() {
    return (
      <div className="appDiv">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/calculator">
              <CalculatorPage />
            </Route>
            <Route path="/quote">
              <QuotesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
