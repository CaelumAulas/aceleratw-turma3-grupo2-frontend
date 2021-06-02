import React from "react";
import { Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const columns = ["Nome"];

const data = [["Ford"], ["GM"], ["Outra Marca"]];

const options = {
  filterType: "checkbox",
};

const ListBrandTable = () => {
  return (
    <>
      <MUIDataTable
        title={"Marca"}
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

export default ListBrandTable;
