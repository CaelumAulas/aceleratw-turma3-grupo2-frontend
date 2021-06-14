import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import CustomButton from "components/CustomButton/CustomButton";
import brandStyles from "./styles";

const columns = ["Nome"];

const ListBrandTable = () => {
  const classes = brandStyles();
  const history = useHistory();
  const [brands, setBrands] = useState([]);
  const [brandsSelected, setBrandsSelected] = useState([]);
  const brandsSelectedQuantity = brandsSelected.length;

  const options = useMemo(
    () => ({
      download: false,
      print: false,
      filterType: "checkbox",
      onRowsDelete: () => {
        if (brandsSelected?.length) {
          // Temporary
          brandsSelected.forEach((brandSelected) => {
            fetch(`http://localhost:8080/brands/${brandSelected.id}`, {
              method: "delete",
            });
          });
        }
      },
      onRowSelectionChange: (_, allRowsSelected) => {
        const currentBrandSelected = allRowsSelected.reduce(
          (acc, rowSelected) => {
            acc = [
              ...acc,
              {
                id: brands[rowSelected.index].id,
                brandName: brands[rowSelected.index].name,
              },
            ];
            return acc;
          },
          []
        );
        setBrandsSelected(currentBrandSelected);
      },
    }),
    [brands, brandsSelected]
  );

  useEffect(() => {
    fetch("http://localhost:8080/brands")
      .then((data) => data.json())
      .then((response) => setBrands(response.content))
      .catch((error) => console.error(error));

    return () => false;
  }, []);

  const brandsName = useMemo(
    () => brands.map((brand) => [brand.name]),
    [brands]
  );

  return (
    <>
      <MUIDataTable
        title={"Marca"}
        data={brandsName}
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
          variant="contained"
          color="primary"
          label="Alterar"
          className={classes.updateButton}
          onClick={() => history.push("/marcas/cadastro", brandsSelected[0])}
          disabled={
            !!(brandsSelectedQuantity > 1 || brandsSelectedQuantity === 0)
          }
          data-testid="brand-list-update-button"
        />
        <CustomButton
          type="reset"
          color="secondary"
          label="Excluir"
          className={classes.deleteButton}
          data-testid="brand-list-delete-button"
        />
        <CustomButton
          variant="contained"
          color="primary"
          label="Incluir"
          onClick={() => history.push("/marcas/cadastro")}
          data-testid="brand-list-add-button"
        />
      </div>
    </>
  );
};

export default ListBrandTable;
