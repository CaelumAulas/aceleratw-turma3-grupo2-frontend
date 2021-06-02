import React from "react";
import { Button } from "@material-ui/core"
import { GridFullHeight } from "components/GridFullHeight/GridFullHeight"
import TextInput from "components/TextInput/TextInput"

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const VehicleForm = () =>{


    return(
        <>
            <GridFullHeight
              container
              direction="column"
              justify="center"
              alignItems="flex-end"
            >
            <Select labelId="selectSimple" variant="outlined" fullWidth >
                  <MenuItem value="marca"> <em>marca</em></MenuItem>
                  <MenuItem value={1}>Fiat</MenuItem>
                  <MenuItem value={2}>Honda</MenuItem> 
            </Select>

            <TextInput id="modelo" label="Modelo"/>
            <TextInput id="ano" label="Ano" />
            <TextInput id="valor" label="Valor" />
            <div>
                <Button variant="contained"  color="primary"> Cadastrar</Button>
                <Button variant="contained" color="secondary">Cancelar</Button>
            </div>

            </GridFullHeight>
        </>
    );
};

export default VehicleForm;