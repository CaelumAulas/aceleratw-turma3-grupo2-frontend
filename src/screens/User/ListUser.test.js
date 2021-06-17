import React from 'react';
import { render } from '@testing-library/react';
import LoadingProvider from 'contexts/LoadingContext';
import ListUser from './ListUsers';

describe('<ListUser', () => {
  it('should return a table', () => {
    render(
      <LoadingProvider>
        <ListUser />
      </LoadingProvider>
    );
    const element = document.querySelector('table');
    expect(element).toBeInTheDocument();
  });
});
