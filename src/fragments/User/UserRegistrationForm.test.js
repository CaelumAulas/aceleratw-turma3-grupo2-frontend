import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserRegistrationForm from './UserRegistrationForm';

import { BASE_URL, HEADERS } from 'api/config';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/usuarios/cadastro',
    search: '',
    hash: '',
    state: undefined,
    key: '5nvxpbdafa',
  }),
  useHistory: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('<UserRegistrationForm />', () => {
  it('should make login', async () => {
    render(<UserRegistrationForm />);
    const formData = JSON.stringify({
      name: '',
      password: '',
    });

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    userEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    expect(window.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/users`,
      expect.objectContaining({
        method: 'POST',
        headers: HEADERS(),
        body: formData,
      })
    );

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});
