import React from 'react';
import { render } from '@testing-library/react';

import { GridFullHeight } from './GridFullHeight';

describe('<GridFullHeight />', () => {
  it('should render a div', () => {
    render(
      <GridFullHeight>
        <h1></h1>
      </GridFullHeight>
    );
    const container = document.querySelector('div');
    expect(container).toBeInTheDocument();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render a div with children', () => {
    render(
      <GridFullHeight>
        <h1></h1>
      </GridFullHeight>
    );
    const container = document.querySelector('div');
    expect(container.children.length).toBeGreaterThan(0);
  });
});
