import React from 'react';
import Heading from './Heading';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Heading ', () => {
    it('renders correctly', () => {
      const tree = renderer
      .create(<Heading>Not</Heading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    });
})