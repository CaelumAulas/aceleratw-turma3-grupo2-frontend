import React, { useEffect, useState, useMemo, useCallback } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import MUIDataTable from "mui-datatables";
import vehicleStyles from "./styles";
import { useHistory } from "react-router-dom";
import useConfirm from "../../hooks/useConfirm";

const columns = ["Marca", "Modelo", "Ano", "Valor"];

const ListVehicleTable = () => {
  const history = useHistory();
  const classes = vehicleStyles();
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesSelected, setVehiclesSelected] = useState([]);
  const confirm = useConfirm();
  const vehiclesSelectedQuantity = vehiclesSelected.length;

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
          delete: false,
          deleteAria: "Excluir registros selecionados",
        },
        pagination: {
          next: "Próxima Página",
          previous: "Página Anterior",
          rowsPerPage: "Registros por página:",
          displayRows: "de",
        },
      },
      onRowSelectionChange: (_, allRowsSelected) => {
        const currentBrandSelected = allRowsSelected.reduce(
          (acc, rowSelected) => {
            acc = [
              ...acc,
              {
                id: vehicles[rowSelected.index].idVehicle,
                brand: vehicles[rowSelected.index].brand,
                brandId: vehicles[rowSelected.index].brandId,
                model: vehicles[rowSelected.index].model,
                year: vehicles[rowSelected.index].years,
                price: vehicles[rowSelected.index].price,
              },
            ];
            return acc;
          },
          []
        );
        setVehiclesSelected(currentBrandSelected);
      },
    }),
    [vehicles]
  );

  const handleDeleteVehicle = useCallback(() => {
    confirm({
      description: `O(s) veículo(s) será(ão) excluído(s)`,
    }).then(() => {
      if (vehiclesSelected?.length) {
        vehiclesSelected.forEach((vehiclesSelected) => {
          fetch(`http://localhost:8080/vehicle/${vehiclesSelected.id}`, {
            method: "delete",
          }).then(() => {
            // Verify refresh table
            fetch("http://localhost:8080/vehicle")
              .then((data) => data.json())
              .then((response) => {
                setVehicles(response.content);
              });
          });
        });
      }
    });
  }, [vehiclesSelected, confirm]);

  useEffect(() => {
    fetch("http://localhost:8080/vehicle")
      .then((data) => data.json())
      .then((response) => {
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
          color="secondary"
          variant="contained"
          label="Excluir"
          className={classes.deleteButton}
          onClick={handleDeleteVehicle}
        />
        <CustomButton
          variant="contained"
          label="Alterar"
          style={{ marginRight: "10px" }}
          className={classes.updateButton}
          disabled={
            !!(vehiclesSelectedQuantity > 1 || vehiclesSelectedQuantity === 0)
          }
          onClick={() =>
            history.push({
              pathname: "/veiculos/cadastro/",
              state: vehiclesSelected[0],
            })
          }
        />
        <CustomButton
          to="/veiculos/cadastro"
          type="submit"
          label="Incluir"
          onClick={() => history.push("/veiculos/cadastro")}
          className={classes.submitButton}
        />
      </div>
    </>
  );
};
export default ListVehicleTable;
