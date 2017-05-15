import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withDefaultCountPropNine from './withDefaultCountPropNine';

const Counter = ({ count }) => (
  <div>Count: {count}</div>
)

const CounterWithDefaultNine = withDefaultCountPropNine(Counter);

const App = () => (
  <div>
    <CounterWithDefaultNine />
    <CounterWithDefaultNine count={22} />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
