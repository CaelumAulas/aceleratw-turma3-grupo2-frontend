import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";
import userStyles from "./styles";

const UserRegistrationForm = () => {
  const classes = userStyles();

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
        <TextInput
          id="passwordConfirmation"
          label="Confirmação de Senha"
          type="password"
        />
        <div style={{ display: "flex" }}>
          <CustomButton
            type="submit"
            label="Cadastrar"
            className={classes.submitButton}
          />
          <CustomButton type="reset" color="secondary" label="Cancelar" />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default UserRegistrationForm;
