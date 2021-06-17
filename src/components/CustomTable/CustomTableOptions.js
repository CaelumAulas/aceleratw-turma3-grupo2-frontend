import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from 'components/CustomButton/CustomButton';

import customTableStyles from './customTableStyles';

const CustomTableOptions = ({
  handleDelete,
  handleUpdate,
  handleNewRegister,
  itemsSelected,
}) => {
  const classes = customTableStyles();
  const hasNoItemsSelected = itemsSelected === 0;
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'flex-end',
      }}
    >
      <CustomButton
        color="secondary"
        variant="contained"
        label="Excluir"
        className={classes.deleteButton}
        onClick={handleDelete}
        disabled={!!hasNoItemsSelected}
      />
      <CustomButton
        variant="contained"
        label="Alterar"
        style={{ marginRight: '10px' }}
        className={classes.updateButton}
        onClick={handleUpdate}
        disabled={!!(itemsSelected > 1 || hasNoItemsSelected)}
      />
      <CustomButton
        to="/veiculos/cadastro"
        type="submit"
        label="Incluir"
        onClick={handleNewRegister}
        className={classes.submitButton}
      />
    </div>
  );
};

CustomTableOptions.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleNewRegister: PropTypes.func.isRequired,
  itemsSelected: PropTypes.number.isRequired,
};

CustomTableOptions.defaultOptions = {
  itemsSelected: 0,
};

export default CustomTableOptions;
