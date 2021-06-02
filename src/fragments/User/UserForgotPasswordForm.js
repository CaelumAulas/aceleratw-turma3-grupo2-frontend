import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import { Button, Typography} from "@material-ui/core";

const UserForgotPasswordForm = () => {
  return (
      <GridFullHeight
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <form>
            <Typography variant="h5">Esqueceu a senha?</Typography>
            <Typography variant="subtitle1">Informe seu e-mail ou login e enviaremos instruções para você criar sua senha.</Typography>
            <TextInput id="username" required label="E-mail / Login" />
        </form>
    
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="normal"
          >
            Enviar
          </Button>
        </div>
      </GridFullHeight>
  );
};

export default UserForgotPasswordForm;
