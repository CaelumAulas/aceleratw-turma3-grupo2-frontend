import React from 'react';
import { render, screen } from '@testing-library/react';
import ListUserTable from './ListUserTable';
import LoadingProvider from 'contexts/LoadingContext';

describe('<ListUserTable />', () => {
  it('should render an add button', async () => {
    render(
      <LoadingProvider>
        <ListUserTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = await screen.findByTestId(
      'user-list-add-button'
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent('Incluir');
  });
});
