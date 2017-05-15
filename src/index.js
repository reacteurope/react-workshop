import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withDefaultCountProp from './withDefaultCountProp';

const Counter = ({ count }) => (
  <div>Count: {count}</div>
)

const CounterWithDefaultTwelve = withDefaultCountProp(Counter, 12);

const App = () => (
  <div>
    <CounterWithDefaultTwelve />
    <CounterWithDefaultTwelve count={22} />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
