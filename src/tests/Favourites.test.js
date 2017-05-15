import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Favourites from '../Favourites';

it('should render an image with the imageUrl and an input with the name', () => {
  const component = mount(
    <Favourites
      name="Franz' Favourite Sports"
      imageUrl="https://www.example.com"
    />
  );
  expect(component.find('input').first().props().value).toEqual(
    "Franz' Favourite Sports"
  );
  expect(component.find('img').props().src).toEqual('https://www.example.com');
});

it('should be able to update the list name', () => {
  const onChange = jest.fn();
  const component = mount(
    <Favourites
      name="Franz' Favourite Sports"
      imageUrl={'https://www.example.com'}
    />
  );
  const event = { target: { value: "Nik's Favourites" } };
  expect(component.find('input').first().props().value).toEqual(
    "Franz' Favourite Sports"
  );
  component.find('input').first().simulate('change', event);
  expect(component.find('input').first().props().value).toEqual(
    "Nik's Favourites"
  );
});

it('should be able to update the favourite text for a new entry', () => {
  const onChange = jest.fn();
  const component = mount(
    <Favourites
      name="Franz' Favourite Sports"
      imageUrl={'https://www.example.com'}
    />
  );
  const event = { target: { value: 'Tennis' } };
  expect(component.find('input').at(1).props().value).toEqual('');
  component.find('input').at(1).simulate('change', event);
  expect(component.find('input').at(1).props().value).toEqual('Tennis');
});

it('should be able to add a new entry', () => {
  const onChange = jest.fn();
  const component = mount(
    <Favourites
      name="Franz' Favourite Sports"
      imageUrl={'https://www.example.com'}
    />
  );
  const changeEvent = { target: { value: 'Tennis' } };
  const submitEvent = { preventDefault: () => null };
  expect(component.find('input').at(1).props().value).toEqual('');
  component.find('input').at(1).simulate('change', changeEvent);
  component.find('form').simulate('submit', submitEvent);
  expect(component.find('input').at(1).props().value).toEqual('');
  expect(component.text()).toContain('Tennis');
});
