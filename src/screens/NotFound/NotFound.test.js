import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from 'screens/NotFound/NotFound';

describe('<NotFound />', () => {
  it('should render a not found message', async () => {
    render(<NotFound />);
    const element = await screen.findByText('Não encontramos sua página');
    expect(element).toBeInTheDocument();
  });
});
