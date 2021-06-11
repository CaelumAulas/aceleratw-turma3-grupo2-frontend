import React, { useEffect, useState, useMemo } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import MUIDataTable from "mui-datatables";
import vehicleStyles from "./styles";
import { Link } from "react-router-dom";

const columns = ["Marca", "Modelo", "Ano", "Valor"];

const ListVehicleTable = () => {
  const classes = vehicleStyles();
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesSelected, setVehiclesSelected] = useState([]);

  const options = useMemo(
    () => ({
      download: false,
      print: false,
      filterType: "checkbox",
      textLabels: {
        body: {
          noMatch: "Nenhum registro encontrado",
          toolTip: "Sort",
          columnHeaderTooltip: (column) => `Sort for ${column.label}`,
        },
        toolbar: {
          search: "Pesquisar",
          viewColumns: "Visualizar Colunas",
          filterTable: "Filtrar",
        },
        filter: {
          all: "Todas",
          title: "FILTROS",
          reset: "LIMPAR",
        },
        viewColumns: {
          title: "Visualizar",
          titleAria: "Mostrar/Esconder Colunas",
        },
        selectedRows: {
          text: "registro(s) selecionados",
          delete: "Excluir",
          deleteAria: "Excluir registros selecionados",
        },
        pagination: {
          next: "Próxima Página",
          previous: "Página Anterior",
          rowsPerPage: "Registros por página:",
          displayRows: "de",
        },
      },
      onRowsDelete: () => {
        if (vehiclesSelected?.length) {
          vehiclesSelected.forEach((vehiclesSelected) => {
            fetch(`http://localhost:8080/vehicle/${vehiclesSelected.id}`, {
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
                id: vehicles[rowSelected.index].idVehicle,
              },
            ];
            return acc;
          },
          []
        );
        setVehiclesSelected(currentBrandSelected);
      },
    }),
    [vehicles, vehiclesSelected]
  );

  useEffect(() => {
    fetch("http://localhost:8080/vehicle")
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setVehicles(response.content);
      });
  }, []);

  const vehiclesData = useMemo(
    () =>
      vehicles.map((vehicle) => {
        return {
          Id: vehicle.idVehicle,
          Marca: vehicle.brand,
          Modelo: vehicle.model,
          Ano: vehicle.years,
          Valor: vehicle.price,
        };
      }),
    [vehicles]
  );

  return (
    <>
      <MUIDataTable
        title={"Veículos"}
        data={vehiclesData}
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
          component={Link}
          variant="contained"
          label="Alterar"
          style={{ marginRight: "10px" }}
          to={{
            pathname: `/veiculos/cadastro/`,
            state: vehiclesSelected[0],
          }}
          className={classes.updateButton}
        />
        <CustomButton
          to="/veiculos/cadastro"
          component={Link}
          type="submit"
          label="Incluir"
          className={classes.submitButton}
        />
      </div>
    </>
  );
};
export default ListVehicleTable;
