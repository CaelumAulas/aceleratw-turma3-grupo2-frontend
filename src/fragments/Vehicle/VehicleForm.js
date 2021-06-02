import React from "react";
import { Button } from "@material-ui/core"
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight"
import TextInput from "components/TextInput/TextInput"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const VehicleForm = () =>{

  const [marca, setMarca] = React.useState('');
  const handleChange = (event) => {
    setMarca(event.target.value);
  };
    return(
        <>
            <GridFullHeight
              container
              direction="column"
              justify="center"
              alignItems="flex-end"
            >
           
            <FormControl variant="filled"  fullWidth>
            <InputLabel variant="filled"  id="selectMarca">Brand</InputLabel>
            <Select value={marca} onChange={handleChange}>
                <MenuItem value=" "><em>None</em></MenuItem>
                <MenuItem value={1}>Fiat</MenuItem>
                <MenuItem value={2}>Honda</MenuItem>
            </Select>
            </FormControl>

            <TextInput id="modelo" label="Model"/>
            <TextInput id="ano" label="Year" />
            <TextInput id="valor" label="Value" />
            <div>
                <Button variant="contained"  color="primary"> Cadastrar</Button>
                <Button variant="contained" color="secondary">Cancelar</Button>
            </div>

            </GridFullHeight>
        </>
    );
};

export default VehicleForm;