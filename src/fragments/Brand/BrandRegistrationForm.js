import React, { useCallback, useState } from "react";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import CustomButton from "components/CustomButton/CustomButton";
import brandStyles from "./styles";
import { Link } from "react-router-dom";

const BrandRegistrationForm = () => {
  const classes = brandStyles();
  const [brandValue, setBrandValue] = useState("");
  const handleBrandFormSubmit = useCallback(() => {
    if (brandValue !== "") {
      fetch("http://localhost:8080/brands", {
        method: "post",
        headers: {
          Accept: "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: brandValue }),
      });
    }
  }, [brandValue]);

  return (
    <GridFullHeight
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBrandFormSubmit();
        }}
      >
        <TextInput
          id="brand"
          label="Marca"
          data-testid="register-brand-input"
          onBlur={(e) => setBrandValue(e.target.value)}
          required
        />
        <div style={{ display: "flex" }}>
          <CustomButton
            type="submit"
            label="Cadastrar"
            className={classes.submitButton}
            data-testid="register-brand-button"
          />
          <Link to="/marcas" className="custom-link cancel-link">
            Cancelar
          </Link>
        </div>
      </form>
    </GridFullHeight>
  );
};

export default BrandRegistrationForm;
