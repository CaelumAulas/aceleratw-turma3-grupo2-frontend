import React from 'react';
import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import ListUserTable from 'fragments/User/ListUserTable';

const ListUsers = () => {
  return (
    <GridFullHeight>
      <ListUserTable />
    </GridFullHeight>
  );
};

export default ListUsers;
