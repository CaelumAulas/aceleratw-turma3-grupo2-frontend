import React from 'react';
import { screen, render } from '@testing-library/react';

import BrandRegistration from './BrandRegistration';

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

describe('<BrandRegistration />', () => {
  it('should render element containing "Marcas"', () => {
    render(<BrandRegistration />);
    const element = screen.getAllByText(/marca/i);

    expect(element.length).toBeGreaterThan(1);
  });
});
