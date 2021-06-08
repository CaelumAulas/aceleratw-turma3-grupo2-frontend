import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";
import brandStyles from "./styles";

const BrandRegistrationForm = () => {
  const classes = brandStyles();
  return (
    <GridFullHeight
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <form>
        <TextInput
          id="brand"
          label="Marca"
          data-testid="register-brand-input"
        />
        <div style={{ display: "flex" }}>
          <CustomButton
            type="submit"
            label="Cadastrar"
            className={classes.submitButton}
            data-testid="register-brand-button"
          />
          <CustomButton type="reset" color="secondary" label="Cancelar" />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default BrandRegistrationForm;
