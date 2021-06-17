import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from 'screens/404/404';

describe('<404 />', () => {
  it('should render a not found message', async () => {
    render(<NotFound />);
    const element = await screen.findByText('Não encontramos sua página');
    expect(element).toBeInTheDocument();
  });
});
