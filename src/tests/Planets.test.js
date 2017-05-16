import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Planets from '../Planets';

it('should be able render loading', () => {
  const component = mount(<Planets />);
  expect(component.text()).toContain('Loading');
});

it('should be able render loading', done => {
  const component = mount(<Planets />);
  // TODO make test more stable by mocking fetch
  setTimeout(() => {
    expect(component.text()).toContain('Alderaan');
    done();
  }, 1000);
});
