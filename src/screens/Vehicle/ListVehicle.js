import React from "react"
const { GridFullHeight } = require("components/GridFullHeight/GridFullHeight");
const { default: ListVehicleTable } = require("fragments/Vehicle/ListVehicleTable");

const ListVehicle = () =>{

    return(
        <GridFullHeight>
            <ListVehicleTable />
        </GridFullHeight>
    );
}
export default ListVehicle;