import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withMinLengthValidation from '../withMinLengthValidation';

const Input = (props) => (
  <input {...props} />
)

const InputWithValidation = withMinLengthValidation(Input, 4)

it('should show a warning if a string value has less then 4 characters', () => {
  const tree = toJson(shallow(<InputWithValidation value={'hi'} />));
  expect(tree).toMatchSnapshot();
});

it('should show a warning if a number value has less then 4 digits', () => {
  const tree = toJson(shallow(<InputWithValidation value={42} />));
  expect(tree).toMatchSnapshot();
});

it('should show no warning if a string value has more then 4 characters', () => {
  const tree = toJson(shallow(<InputWithValidation value={'Ada Lovelace'} />));
  expect(tree).toMatchSnapshot();
});
