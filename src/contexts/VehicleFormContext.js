import { createContext } from 'react';

const VehicleFormContext = createContext({
  brand: noValidation,
  model: noValidation,
  year: noValidation,
});

function noValidation() {
  return { isValid: true, text: '' };
}

export default VehicleFormContext;
