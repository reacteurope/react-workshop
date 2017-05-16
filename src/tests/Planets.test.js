import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Planets from '../Planets';

it('should be able render all Planets', done => {
  const component = mount(<Planets />);
  done();
});
