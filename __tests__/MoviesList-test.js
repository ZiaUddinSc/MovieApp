/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {create, act} from 'react-test-renderer';
import MoviesList from '../src/Components/MoviesList';
const tree = create(<MoviesList />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('button press', () => {
  const button = tree.root.findAllByType({testId: 'myButton'}).props;
  act(() => console.log(button));
});
