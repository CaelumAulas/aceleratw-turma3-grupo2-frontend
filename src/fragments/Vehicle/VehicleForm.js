import React, { useState, useCallback, useEffect } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import vehicleStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";

const VehicleForm = () => {
  const { state: routeState } = useLocation();
  const history = useHistory();
  const classes = vehicleStyles();

  const [brandData, setBrandData] = useState([]);
  const [brandValue, setBrandValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/brands")
      .then((data) => data.json())
      .then((response) => setBrandData(response.content));
  }, []);

  const handleVehicleFormSubmit = useCallback(() => {
    const { url, method } = routeState
      ? {
          url: `http://localhost:8080/vehicle/${routeState.id}`,
          method: "put",
        }
      : {
          url: "http://localhost:8080/vehicle",
          method: "post",
        };
    fetch(url, {
      method,
      headers: {
        Accept: "application/vnd.vtex.ds.v10+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameBrand: brandValue,
        model: modelValue,
        years: yearValue,
        price: priceValue,
      }),
    }).then((response) => {
      history.push("/veiculos");
    });
  }, [brandValue, modelValue, yearValue, priceValue, routeState, history]);

  return (
    <>
      <GridFullHeight container direction="column" alignItems="center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVehicleFormSubmit();
          }}
        >
          <FormControl variant="filled" fullWidth>
            <InputLabel required variant="filled" id="selectMarca">
              Selecione uma marca
            </InputLabel>
            <Select
              defaultValue=""
              onChange={(e) => setBrandValue(e.target.value)}
            >
              {brandData.map((brand) => {
                return (
                  <MenuItem key={brand.name} value={brand.name}>
                    {brand.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextInput
            value={modelValue}
            id="model"
            label="Modelo"
            required
            onChange={(e) => setModelValue(e.target.value)}
          />
          <TextInput
            value={yearValue}
            id="year"
            label="Ano"
            required
            onChange={(e) => setYearValue(e.target.value)}
          />
          <TextInput
            value={priceValue}
            id="value"
            label="Valor"
            required
            onChange={(e) => setPriceValue(e.target.value)}
          />

          <div style={{ display: "flex" }}>
            <CustomButton
              type="submit"
              label="Cadastrar"
              className={classes.submitButton}
            />
            <CustomButton
              to="/veiculos"
              component={Link}
              type="reset"
              color="secondary"
              label="Cancelar"
            />
          </div>
        </form>
      </GridFullHeight>
    </>
  );
};

export default VehicleForm;
