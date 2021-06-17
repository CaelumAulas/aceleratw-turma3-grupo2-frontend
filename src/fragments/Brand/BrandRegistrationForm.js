import React, { useCallback, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";

import brandStyles from "./styles";

const BrandRegistrationForm = () => {
  const routeState = useLocation()?.state;
  const history = useHistory();
  const classes = brandStyles();
  const [brandValue, setBrandValue] = useState("");

  const handleBrandFormSubmit = useCallback(() => {
    if (brandValue !== "") {
      const { url, method } = routeState
        ? {
            url: `http://localhost:8080/brands/${routeState.id}`,
            method: "put",
          }
        : {
            url: "http://localhost:8080/brands",
            method: "post",
          };
      fetch(url, {
        method,
        headers: {
          Accept: "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: brandValue }),
      }).then(() => history.push("/marcas"));
    }
  }, [brandValue, history, routeState]);

  return (
    <GridFullHeight container direction="column" alignItems="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBrandFormSubmit();
        }}
      >
        <TextInput
          id="brand"
          label="Marca"
          defaultValue={routeState?.brandName ?? ""}
          onBlur={(e) => setBrandValue(e.target.value)}
          data-testid="register-brand-input"
          required
        />
        <div style={{ display: "flex" }}>
          <CustomButton
            type="submit"
            label="Salvar"
            className={classes.submitButton}
            data-testid="register-brand-button"
          />
          <CustomButton
            type="reset"
            color="secondary"
            label="Cancelar"
            onClick={() => history.push("/marcas")}
            className={classes.deleteButton}
          />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default BrandRegistrationForm;
