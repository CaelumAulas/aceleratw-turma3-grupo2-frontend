import React from 'react';
import { render, screen } from '@testing-library/react';
import ListVehicleTable from './ListVehicleTable';
import LoadingProvider from 'contexts/LoadingContext';

describe('vehicle list', () => {
  describe('table vehicle', () => {
    it('should render table', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('grid', { name: 'Veículos' });
    });

    it('should render button search', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('button', { name: 'Pesquisar' });
    });

    it('should render column brand', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('columnheader', { name: 'Marca' });
    });

    it('should render column model', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('columnheader', { name: 'Modelo' });
    });

    it('should render column year', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('columnheader', { name: 'Ano' });
    });

    it('should render column value', async () => {
      render(
        <LoadingProvider>
          <ListVehicleTable />
        </LoadingProvider>
      );
      screen.getByRole('columnheader', { name: 'Valor' });
    });
  });
});
