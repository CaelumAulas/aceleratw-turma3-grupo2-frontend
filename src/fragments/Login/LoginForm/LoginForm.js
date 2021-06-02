import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import { Button } from "@material-ui/core";

const LoginForm = () => {
  return (
      <GridFullHeight
        container
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <TextInput id="username" label="Usuário" />
        <TextInput id="password" label="Senha" type="password" />
        <Button variant="contained" color="primary">
          Logar
        </Button>
      </GridFullHeight>
  );
};

export default LoginForm;