import React, { useCallback, useEffect, useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import brandStyles from "./styles";
import CustomButton from "components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const columns = ["Nome"];

const ListBrandTable = () => {
  const classes = brandStyles();
  const [brands, setBrands] = useState([]);
  const [brandsSelected, setBrandsSelected] = useState([]);
  const options = useMemo(
    () => ({
      filterType: "checkbox",
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
    [brands]
  );

  const handleDeleteBrand = useCallback(() => {
    if (brandsSelected?.length) {
      brandsSelected.forEach((brandSelected) => {
        fetch(`http://localhost:8080/brands/${brandSelected.id}`, {
          method: "delete",
        });
      });
    }
  }, [brandsSelected]);

  useEffect(() => {
    fetch("http://localhost:8080/brands")
      .then((data) => data.json())
      .then((response) => setBrands(response.content));
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
          type="reset"
          color="secondary"
          label="Excluir"
          data-testid="brand-list-delete-button"
          className={classes.deleteButton}
          onClick={handleDeleteBrand}
        />
        <CustomButton
          variant="contained"
          label="Alterar"
          data-testid="brand-list-update-button"
          className={classes.updateButton}
        />
        <Link
          to="/marcas/cadastro"
          data-testid="brand-list-add-button"
          className="custom-link confirm-link"
        >
          Incluir
        </Link>
      </div>
    </>
  );
};

export default ListBrandTable;
