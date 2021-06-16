import React, { useState, useCallback, useEffect } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import vehicleStyles from "./styles";
import { useHistory, useLocation } from "react-router-dom";

const VehicleForm = () => {
  const routeState = useLocation()?.state;
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
      .then((response) => {
        setBrandData(response.content);
      });

    setBrandValue(routeState?.brand ?? "");
    setModelValue(routeState?.model ?? "");
    setYearValue(routeState?.year ?? "");
    setPriceValue(routeState?.price ?? "");
  }, [routeState]);

  const handleVehicleFormSubmit = useCallback(() => {
    if (
      brandValue !== "" &&
      modelValue !== "" &&
      yearValue !== "" &&
      priceValue !== ""
    ) {
      const { url, method } = routeState
        ? {
            url: `http://localhost:8080/vehicle/${routeState.id}`,
            method: "put",
          }
        : {
            url: "http://localhost:8080/vehicle",
            method: "post",
          };

      console.log(url);
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
          price: priceValue.toString().replace(",", "."),
        }),
      }).then(() => {
        history.push("/veiculos");
      });
    }
  }, [brandValue, modelValue, yearValue, priceValue, history, routeState]);

  return (
    <GridFullHeight container direction="column" alignItems="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVehicleFormSubmit();
        }}
      >
        <FormControl data-testid="select-brand" variant="outlined" fullWidth>
          <InputLabel required id="selectMarca">
            Selecione uma marca
          </InputLabel>
          <Select
            defaultValue={routeState?.brand ?? ""}
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
          defaultValue={routeState?.model ?? ""}
          id="model"
          label="Modelo"
          required
          onChange={(e) => setModelValue(e.target.value)}
        />
        <TextInput
          defaultValue={routeState?.year ?? ""}
          id="year"
          label="Ano"
          required
          onChange={(e) => setYearValue(e.target.value)}
        />
        <TextInput
          defaultValue={routeState?.price ?? ""}
          id="value"
          label="Valor"
          required
          onChange={(e) => setPriceValue(e.target.value)}
        />

        <div style={{ display: "flex" }}>
          <CustomButton
            style={{ marginRight: "10px" }}
            to="/veiculos"
            onClick={() => history.push("/veiculos")}
            type="reset"
            color="secondary"
            label="Cancelar"
          />
          <CustomButton
            type="submit"
            label="Salvar"
            className={classes.submitButton}
          />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default VehicleForm;
