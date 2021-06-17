import React from 'react';
import MUIDataTable from 'mui-datatables';
import CustomButton from 'components/CustomButton/CustomButton';
import userStyles from './userStyles';

const columns = ['Nome'];

const data = [['Bianca'], ['Ingrid'], ['Luiza'], ['Ronaldo'], ['Wendel']];

const options = {
  filterType: 'checkbox',
};

const ListUserTable = () => {
  const classes = userStyles();

  return (
    <>
      <MUIDataTable
        title={'Usuários'}
        data={data}
        columns={columns}
        options={options}
      />
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          justifyContent: 'flex-end',
        }}
      >
        <CustomButton
          type="reset"
          color="secondary"
          label="Excluir"
          className={classes.deleteButton}
          data-testid="user-list-delete-button"
        />
        <CustomButton
          variant="contained"
          label="Alterar"
          className={classes.updateButton}
          data-testid="user-list-update-button"
        />
        <CustomButton
          type="submit"
          label="Incluir"
          className={classes.submitButton}
          data-testid="user-list-add-button"
        />
      </div>
    </>
  );
};

export default ListUserTable;
