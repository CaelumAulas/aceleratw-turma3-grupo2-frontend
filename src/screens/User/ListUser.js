import React from "react";
import { ContainerFullHeight } from "components/ContainerFullHeight/ContainerFullHeight";
import ListUserTable from "fragments/User/ListUserTable";

const ListUsers = () => {
  return (
    <ContainerFullHeight>
      <ListUserTable />
    </ContainerFullHeight>
  );
};

export default ListUsers;
