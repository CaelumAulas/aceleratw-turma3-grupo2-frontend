import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoadingContext = createContext(null);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoadingProvider;
