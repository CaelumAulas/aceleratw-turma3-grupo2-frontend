import { useContext } from 'react';

import { LoadingContext } from 'contexts/LoadingContext';

export default function useLoadingContext() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('Yout must use useLoadingContext inside LoadingProvider');
  }

  return context;
}
