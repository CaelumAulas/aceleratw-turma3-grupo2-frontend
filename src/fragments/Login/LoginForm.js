import React, { useState } from 'react';
import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import TextInput from 'components/TextInput/TextInput';
import CustomButton from 'components/CustomButton/CustomButton';
import { Link, useHistory } from 'react-router-dom';
import { BASE_URL } from 'api/config';

const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          localStorage.setItem('Token', data.token);
          history.push('/inicio');
        } else {
          alert('Usuário ou senha incorretos');
        }
      })
      .catch(() => {
        alert('Usuário ou senha incorretos');
      });
  }

  return (
    <GridFullHeight container direction="column" alignItems="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <TextInput
          value={username}
          id="username"
          label="Usuário"
          required
          data-testid="login-username-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          value={password}
          id="password"
          label="Senha"
          type="password"
          required
          data-testid="login-password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton label="Logar" />
        <p>
          Não tem conta? <Link to="/usuarios/cadastro"> Cadastra-se</Link>
        </p>
      </form>
    </GridFullHeight>
  );
};

export default LoginForm;
