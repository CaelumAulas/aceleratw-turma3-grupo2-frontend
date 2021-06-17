import React from 'react';
import { render, screen } from '@testing-library/react';

import LoadingContext from 'contexts/LoadingContext';
import CustomButton from './CustomButton';

describe('<CustomButton />', () => {
  it('should render an button element', async () => {
    render(
      <LoadingContext>
        <CustomButton label="confirmar" />
      </LoadingContext>
    );
    const element = await screen.findByRole('button');
    expect(element).toHaveTextContent(/confirmar/i);
  });
});
