import React from 'react';
import { render } from '@testing-library/react';
import LoadingProvider from 'contexts/LoadingContext';
import ListVehicle from './ListVehicle';

describe('<ListVehicle', () => {
  it('should return a table', () => {
    render(
      <LoadingProvider>
        <ListVehicle />
      </LoadingProvider>
    );
    const element = document.querySelector('table');
    expect(element).toBeInTheDocument();
  });
});
