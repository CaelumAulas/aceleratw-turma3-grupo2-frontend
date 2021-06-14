import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";

const LoginForm = () => {
  return (
    <GridFullHeight container direction="column" alignItems="center">
      <form>
        <TextInput
          id="username"
          label="Usuário"
          data-testid="login-username-input"
        />
        <TextInput
          id="password"
          label="Senha"
          type="password"
          data-testid="login-password-input"
        />
        <CustomButton label="Logar" />
      </form>
    </GridFullHeight>
  );
};

export default LoginForm;
