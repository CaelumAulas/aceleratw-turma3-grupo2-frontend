import { useState } from "react";

function useFormValidators(validationsContext) {
  const initialState = generateInitialState(validationsContext);
  const [errors, setFormErrors] = useState(initialState);

  function validateFormField(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validationsContext[name](value);
    setFormErrors(newState);
  }

  function isFormValid() {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateFormField, isFormValid];
}

function generateInitialState(validations) {
  const initialState = {};
  for (let field in validations) {
    initialState[field] = { isValid: true, text: "" };
  }

  return initialState;
}

export default useFormValidators;
