import React from 'react';

import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import ListVehicleTable from 'fragments/Vehicle/ListVehicleTable';

const ListVehicle = () => {
  return (
    <GridFullHeight>
      <ListVehicleTable />
    </GridFullHeight>
  );
};
export default ListVehicle;
