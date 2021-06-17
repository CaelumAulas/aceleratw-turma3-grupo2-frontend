import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import LoadingProvider from 'contexts/LoadingContext';

import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should render an input element', async () => {
    const getById = queryByAttribute.bind(null, 'id');
    const { container } = render(
      <LoadingProvider>
        <TextInput id="teste-input" label="Teste input" />
      </LoadingProvider>
    );
    const element = getById(container, 'teste-input');
    expect(element).toBeInTheDocument();
  });
});
