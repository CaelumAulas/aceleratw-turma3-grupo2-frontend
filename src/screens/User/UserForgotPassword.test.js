import React from 'react';
import { render, screen } from '@testing-library/react';

import UserForgotPassword from './UserForgotPassword';

describe('<UserForgotPassword />', () => {
  it('should render heading', () => {
    render(<UserForgotPassword />);
    const headingElement = screen.getByRole('heading', {
      name: /Esqueceu a senha?/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
