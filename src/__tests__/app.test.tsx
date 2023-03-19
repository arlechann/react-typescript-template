import React from 'react';
import renderer from 'react-test-renderer'
import { App } from '../app';

test('Show "react-typescript-template"', () => {
  const component = renderer.create(<App />);
  const instance = component.root;

  expect(instance?.findByType('div').children).toEqual(['react-typescript-template']);
})