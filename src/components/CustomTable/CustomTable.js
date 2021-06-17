import React, { useMemo } from "react";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";

const CustomTable = ({ customTableProps }) => {
  const { title, data, columns, options } = customTableProps;

  const defaultOptions = useMemo(
    () => ({
      ...options,
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
    }),
    [options]
  );

  return (
    <>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={defaultOptions}
      />
    </>
  );
};

CustomTable.propTypes = {
  customTableProps: PropTypes.object.isRequired,
};

export default CustomTable;
