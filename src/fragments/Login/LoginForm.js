import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";

const LoginForm = () => {
  return (
    <GridFullHeight
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <form>
        <TextInput id="username" label="Usuário" />
        <TextInput id="password" label="Senha" type="password" />
        <CustomButton label="Logar" />
      </form>
    </GridFullHeight>
  );
};

export default LoginForm;