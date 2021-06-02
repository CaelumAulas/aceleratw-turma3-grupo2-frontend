import React from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import { Button } from "@material-ui/core";

const BrandRegistrationForm = () => {
  return (
    <>
      <GridFullHeight
        container
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <TextInput id="brand" label="Marca" />
        
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="normal"
          >
            Cadastrar
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            margin="normal"
          >
            Cancelar
          </Button>
        </div>
      </GridFullHeight>
    </>
  );
};

export default BrandRegistrationForm;
