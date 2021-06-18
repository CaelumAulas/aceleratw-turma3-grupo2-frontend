import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useConfirm from 'hooks/useConfirm';
import useLoadingContext from 'hooks/useLoadingContext';
import CustomTable from 'components/CustomTable/CustomTable';
import CustomTableOptions from 'components/CustomTable/CustomTableOptions';

import { BASE_URL, HEADERS } from 'api/config';

const ListBrandTable = () => {
  const { setLoading } = useLoadingContext();
  const history = useHistory();
  const [brands, setBrands] = useState([]);
  const [brandsSelected, setBrandsSelected] = useState([]);
  const brandsSelectedQuantity = brandsSelected.length;
  const userLogged = localStorage.getItem('Token');
  const confirm = useConfirm();

  const options = useMemo(
    () => ({
      onRowsDelete: () => false,
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

  const handleBrandDelete = useCallback(() => {
    confirm({
      description: `A(s) marca(s) será(ão) excluído(s)`,
    }).then(() => {
      if (brandsSelected?.length) {
        // Temporary
        brandsSelected.forEach((brandSelected) => {
          fetch(`${BASE_URL}/brands/${brandSelected.id}`, {
            method: 'delete',
          }).then(() => {
            fetch(`${BASE_URL}/brands`, {
              method: 'get',
              headers: HEADERS(),
            })
              .then((data) => data.json())
              .then((response) => {
                if (response?.content?.length) {
                  setBrands(response.content);
                }
              });
          });
        });
      }
    });
  }, [confirm, brandsSelected]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/brands`, {
      headers: HEADERS(),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response?.content?.length) {
          setBrands(response.content);
          setLoading(false);
        }
      })
      .catch((error) => console.error(error));

    return () => false;
  }, [setLoading, userLogged]);

  const brandsName = useMemo(
    () => brands.map((brand) => [brand.name]),
    [brands]
  );

  return (
    <>
      <CustomTable
        customTableProps={{
          title: 'Marca',
          data: brandsName,
          columns: ['Nome'],
          options,
        }}
      />
      <CustomTableOptions
        handleDelete={handleBrandDelete}
        handleUpdate={() => history.push('/marcas/cadastro', brandsSelected[0])}
        handleNewRegister={() => history.push('/marcas/cadastro')}
        itemsSelected={brandsSelectedQuantity}
      />
    </>
  );
};

export default ListBrandTable;
