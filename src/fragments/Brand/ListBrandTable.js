import React from "react";
import MUIDataTable from "mui-datatables";
import brandStyles from "./styles";
import CustomButton from "components/CustomButton/CustomButton";

const columns = ["Nome"];

const data = [["Ford"], ["GM"], ["Outra Marca"]];

const options = {
  filterType: "checkbox",
};

const ListBrandTable = () => {
  const classes = brandStyles();
  return (
    <>
      <MUIDataTable
        title={"Marca"}
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
          data-testid="brand-list-delete-button"
          className={classes.deleteButton}
        />
        <CustomButton
          variant="contained"
          label="Alterar"
          data-testid="brand-list-update-button"
          className={classes.updateButton}
        />
        <CustomButton
          type="submit"
          label="Incluir"
          data-testid="brand-list-add-button"
          className={classes.submitButton}
        />
      </div>
    </>
  );
};

export default ListBrandTable;
