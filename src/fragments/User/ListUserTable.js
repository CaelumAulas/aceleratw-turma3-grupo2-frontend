import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomTable from 'components/CustomTable/CustomTable';
import useConfirm from 'hooks/useConfirm';

import userStyles from './userStyles';

import { BASE_URL, HEADERS } from 'api/config';

const ListUserTable = () => {
  const classes = userStyles();

  const [users, setUsers] = useState([]);
  const [usersSelected, setUsersSelected] = useState([]);

  const confirm = useConfirm();
  const history = useHistory();

  const options = useMemo(
    () => ({
      onRowsDelete: () => false,
      onRowSelectionChange: (_, allRowsSelected) => {
        const currentUserSelected = allRowsSelected.reduce(
          (acc, rowSelected) => {
            acc = [
              ...acc,
              {
                id: users[rowSelected.index].id,
                brandName: users[rowSelected.index].name,
              },
            ];
            return acc;
          },
          []
        );
        setUsersSelected(currentUserSelected);
      },
    }),
    [users]
  );

  const handleDeleteUser = useCallback(() => {
    confirm({
      description: `O(s) usuário(s) será(ão) excluído(s)`,
    }).then(() => {
      if (usersSelected?.length) {
        // Temporary
        usersSelected.forEach((userSelected) => {
          fetch(`${BASE_URL}/users/${userSelected.id}`, {
            method: 'delete',
            headers: HEADERS,
          }).then(() => {
            fetch(`${BASE_URL}/users`, {
              method: 'get',
              headers: HEADERS,
            })
              .then((data) => data.json())
              .then((response) => {
                if (response?.content?.length) {
                  setUsers(response.content);
                }
              });
          });
        });
      }
    });
  }, [confirm, usersSelected]);

  const usersName = useMemo(() => users.map((user) => [user.name]), [users]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`, {
      method: 'get',
      headers: HEADERS,
    })
      .then((data) => data.json())
      .then((response) => {
        if (response?.content?.length) {
          setUsers(response.content);
        }
      });
  }, []);

  return (
    <>
      <CustomTable
        customTableProps={{
          title: 'Usuários',
          data: usersName,
          columns: ['Nome'],
          options,
        }}
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
          onClick={handleDeleteUser}
        />
        <CustomButton
          type="submit"
          label="Incluir"
          onClick={() =>
            history.push('/usuarios/cadastro', { returnUrl: '/usuarios' })
          }
          className={classes.submitButton}
          data-testid="user-list-add-button"
        />
      </div>
    </>
  );
};

export default ListUserTable;
