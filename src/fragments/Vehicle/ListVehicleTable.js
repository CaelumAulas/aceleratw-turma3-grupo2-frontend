import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import useConfirm from "hooks/useConfirm";
import useLoadingContext from "hooks/useLoadingContext";

import CustomTable from "components/CustomTable/CustomTable";
import CustomTableOptions from "components/CustomTable/CustomTableOptions";

const ListVehicleTable = () => {
  const history = useHistory();
  const confirm = useConfirm();
  const { setLoading } = useLoadingContext();
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesSelected, setVehiclesSelected] = useState([]);
  const vehiclesSelectedQuantity = vehiclesSelected.length;

  const options = useMemo(
    () => ({
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
    [vehicles]
  );

  const handleDeleteVehicle = useCallback(() => {
    confirm({
      description: `O(s) veículo(s) será(ão) excluído(s)`,
    }).then(() => {
      if (vehiclesSelectedQuantity) {
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
  }, [confirm, vehiclesSelectedQuantity, vehiclesSelected]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/vehicle")
      .then((data) => data.json())
      .then((response) => {
        if (response?.content?.length) {
          setVehicles(response.content);
          setLoading(false);
        }
      });
  }, [setLoading]);

  const vehiclesData = useMemo(
    () =>
      vehicles.map((vehicle) => ({
        Id: vehicle.idVehicle,
        Marca: vehicle.brand,
        Modelo: vehicle.model,
        Ano: vehicle.years,
        Valor: vehicle.price,
      })),
    [vehicles]
  );

  return (
    <>
      <CustomTable
        customTableProps={{
          title: "Veículos",
          data: vehiclesData,
          columns: ["Marca", "Modelo", "Ano", "Valor"],
          options,
        }}
      />
      <CustomTableOptions
        handleDelete={handleDeleteVehicle}
        handleUpdate={() =>
          history.push({
            pathname: "/veiculos/cadastro/",
            state: vehiclesSelected[0],
          })
        }
        handleNewRegister={() => history.push("/veiculos/cadastro")}
        itemsSelected={vehiclesSelectedQuantity}
      />
    </>
  );
};
export default ListVehicleTable;
