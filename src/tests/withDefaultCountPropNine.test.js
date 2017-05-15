import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withDefaultCountPropNine from '../withDefaultCountPropNine';

const Counter = ({ count }) => (
  <div>Count: {count}</div>
)
const CounterWithDefaultNine = withDefaultCountPropNine(Counter);

it('should set the prop count to `9` by default', () => {
  const tree = toJson(shallow(<CounterWithDefaultNine />));
  expect(tree).toMatchSnapshot();
});

it('should accept a prop `count` which should overwrite the default', () => {
  const tree = toJson(shallow(<CounterWithDefaultNine count={12} />));
  expect(tree).toMatchSnapshot();
});
