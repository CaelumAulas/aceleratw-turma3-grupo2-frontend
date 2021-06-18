import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandRegistrationForm from './BrandRegistrationForm';
import LoadingProvider from 'contexts/LoadingContext';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/marcas/cadastro',
    search: '',
    hash: '',
    state: undefined,
    key: '5nvxpbdafa',
  }),
  useHistory: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('<BrandRegistrationForm />', () => {
  it('should render an input to insert brand value', async () => {
    render(
      <LoadingProvider>
        <BrandRegistrationForm />
      </LoadingProvider>
    );
    const brandInput = await screen.findByTestId('register-brand-input');
    expect(brandInput).toBeInTheDocument();
  });
  it('should render a button to send new brand value', async () => {
    render(
      <LoadingProvider>
        <BrandRegistrationForm />
      </LoadingProvider>
    );
    const brandSendButton = await screen.findByTestId('register-brand-button');
    expect(brandSendButton).toBeInTheDocument();
  });

  describe('should render inputs', () => {
    it('should render input brand', async () => {
      render(
        <LoadingProvider>
          <BrandRegistrationForm />
        </LoadingProvider>
      );
      screen.getByRole('textbox', { name: 'Marca' });
    });
  });
});
