import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';
import LoadingContext from 'contexts/LoadingContext';

describe('<Loading />', () => {
  it('should render a component', () => {
    render(
      <LoadingContext>
        <Loading />
      </LoadingContext>
    );
    const element = document.querySelector('[role=progressbar]');
    expect(element).toBeInTheDocument();
  });
});
