import React from "react";
import { Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const columns = ["Brand", "Model", "Year", "Value"];

const data = [["Ford", "Ford KA", "2018", "30.000"],
              ["Fiat", "Palio", "2015", "32.000"],
              ["Honda", "Civic", "2019", "45.000"]];
const options = {
  filterType: "checkbox",
};

const ListVehicleTable = () => {
    return (
<>
      <MUIDataTable
        title={"Vehicle"}
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
  export default ListVehicleTable;