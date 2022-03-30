import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Button ', () => {
    it('renders correctly', () => {
      const tree = renderer
      .create(<Button>Name</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    });
})