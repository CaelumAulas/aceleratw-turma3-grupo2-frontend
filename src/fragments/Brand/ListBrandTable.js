import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import useConfirm from 'hooks/useConfirm';
import useLoadingContext from 'hooks/useLoadingContext';
import UserLoggedContext from 'contexts/UserLoggedContext';
import CustomTable from 'components/CustomTable/CustomTable';
import CustomTableOptions from 'components/CustomTable/CustomTableOptions';

const ListBrandTable = () => {
  const { setLoading } = useLoadingContext();
  const history = useHistory();
  const [brands, setBrands] = useState([]);
  const [brandsSelected, setBrandsSelected] = useState([]);
  const userLogged = useContext(UserLoggedContext);
  const brandsSelectedQuantity = brandsSelected.length;
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
          fetch(`http://localhost:8080/brands/${brandSelected.id}`, {
            method: 'delete',
          }).then(() => {
            fetch('http://localhost:8080/brands')
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
    fetch('http://localhost:8080/brands', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userLogged.token,
      },
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
