import React, { useEffect, useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

const columns = ["Nome"];

const ListBrandTable = () => {
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
        <Link
          to={{
            pathname: "/marcas/cadastro",
            state: brandsSelected[0],
          }}
          style={{ marginRight: "10px" }}
          data-testid="brand-list-add-button"
          className={`custom-link confirm-link ${
            brandsSelectedQuantity > 1 || brandsSelectedQuantity === 0
              ? "disabled"
              : ""
          }`}
        >
          Alterar
        </Link>
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
