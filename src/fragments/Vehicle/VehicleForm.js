import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import TextInput from "components/TextInput/TextInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import vehicleStyles from "./styles";

const VehicleForm = () => {
  const [marca, setMarca] = React.useState("");
  const handleChange = (event) => {
    setMarca(event.target.value);
  };

  const classes = vehicleStyles();
  return (
    <>
      <GridFullHeight
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <form>
          <FormControl variant="filled" fullWidth>
            <InputLabel variant="filled" id="selectMarca">
              Brand
            </InputLabel>
            <Select value={marca} onChange={handleChange}>
              <MenuItem value=" ">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Fiat</MenuItem>
              <MenuItem value={2}>Honda</MenuItem>
            </Select>
          </FormControl>

          <TextInput id="model" label="Model" />
          <TextInput id="year" label="Year" />
          <TextInput id="value" label="Value" />

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
    </>
  );
};

export default VehicleForm;
