import React from "react";
import { Button } from "@material-ui/core";

const columns = ["Nome"];

const data = [["Bianca"], ["Ingrid"], ["Luiza"], ["Ronaldo"], ["Wendel"]];

const options = {
  filterType: "checkbox",
};

const ListUserForm = () => {
  return (
    <>
      <MUIDataTable
        title={"Usuários"}
        data={data}
        columns={columns}
        options={options}
      />
      <div>
        <Button
          type="reset"
          variant="contained"
          color="secondary"
          margin="normal"
        >
          Excluir
        </Button>
        <Button variant="contained" color="primary" margin="normal">
          Alterar
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
        >
          Incluir
        </Button>
      </div>
    </>
  );
};

export default ListUserForm;
