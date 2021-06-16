import React, { useState, useContext } from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import UserLogged from "../../contexts/UserLogged";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userLogged = useContext(UserLogged);

  async function handleLogin() {
    await fetch(`http://localhost:8080/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        userLogged.token = data.token;
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          value={password}
          id="password"
          label="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton label="Entrar" />
        <p>
          {" "}
          Não tem conta? <Link to="/usuarios/cadastro"> Cadastra-se</Link>
        </p>
      </form>
    </GridFullHeight>
  );
};

export default LoginForm;
