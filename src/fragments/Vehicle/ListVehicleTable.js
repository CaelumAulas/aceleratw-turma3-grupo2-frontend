import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import MUIDataTable from "mui-datatables";
import vehicleStyles from "./styles";

const columns = ["Brand", "Model", "Year", "Value"];

const data = [
  ["Ford", "Ford KA", "2018", "30.000"],
  ["Fiat", "Palio", "2015", "32.000"],
  ["Honda", "Civic", "2019", "45.000"],
];
const options = {
  filterType: "checkbox",
};

const ListVehicleTable = () => {
  const classes = vehicleStyles();
  return (
    <>
      <MUIDataTable
        title={"Vehicle"}
        data={data}
        columns={columns}
        options={options}
      />

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          type="reset"
          color="secondary"
          label="Excluir"
          className={classes.deleteButton}
        />
        <CustomButton
          variant="contained"
          label="Alterar"
          className={classes.updateButton}
        />
        <CustomButton
          type="submit"
          label="Incluir"
          className={classes.submitButton}
        />
      </div>
    </>
  );
};
export default ListVehicleTable;
