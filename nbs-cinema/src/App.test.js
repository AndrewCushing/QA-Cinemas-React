import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';
import CurrentFilms from './component/CurrentFilms';

describe('App', () => { 

it('renders without crashing', () => {
  const component = renderer.create(<CurrentFilms/>);
  const instance = component.getInstance();

  console.log(instance);

  component.root.findByType("button");




});
});

