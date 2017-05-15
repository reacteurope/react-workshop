import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withDefaultCountProp from '../withDefaultCountProp';

const Counter = ({ count }) => (
  <div>Count: {count}</div>
)
const CounterWithDefaultTwelve = withDefaultCountProp(Counter, 12);

it('should set the prop count to `12` by default', () => {
  const tree = toJson(shallow(<CounterWithDefaultTwelve />));
  expect(tree).toMatchSnapshot();
});

it('should accept a prop `count` which should overwrite the default', () => {
  const tree = toJson(shallow(<CounterWithDefaultTwelve count={22} />));
  expect(tree).toMatchSnapshot();
});
