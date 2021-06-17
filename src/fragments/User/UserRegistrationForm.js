import React, { useState } from 'react';
import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import TextInput from 'components/TextInput/TextInput';
import CustomButton from 'components/CustomButton/CustomButton';
import userStyles from './userStyles';

const UserRegistrationForm = () => {
  const classes = userStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleRegisterUser() {
    fetch(`http://localhost:8080/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    });
  }

  return (
    <GridFullHeight
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterUser();
        }}
      >
        <TextInput
          value={username}
          id="username"
          label="Usuário"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          value={password}
          id="password"
          label="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          value={passwordConfirmation}
          id="passwordConfirmation"
          label="Confirmação de Senha"
          type="password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div style={{ display: 'flex' }}>
          <CustomButton
            style={{ marginRight: '10px' }}
            type="reset"
            color="secondary"
            label="Cancelar"
          />
          <CustomButton
            type="submit"
            label="Cadastrar"
            className={classes.submitButton}
          />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default UserRegistrationForm;
