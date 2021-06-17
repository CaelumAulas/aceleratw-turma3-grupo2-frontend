import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';

import CustomButton from 'components/CustomButton/CustomButton';
import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import TextInput from 'components/TextInput/TextInput';

import UserLoggedContext from 'contexts/UserLoggedContext';
import VehicleFormContext from 'contexts/VehicleFormContext';
import useFormValidators from 'hooks/useFormValidators';

import vehicleStyles from './vehicleStyles';

const VehicleForm = () => {
  const history = useHistory();
  const classes = vehicleStyles();
  const routeState = useLocation()?.state;
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '0',
  });
  const [brandData, setBrandData] = useState([]);
  const userLogged = useContext(UserLoggedContext);
  const formValidations = useContext(VehicleFormContext);
  const [isFormValid] = useFormValidators(formValidations);

  useEffect(() => {
    fetch('http://localhost:8080/brands', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + userLogged.token,
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setBrandData(response.content);
      });

    setFormData({
      brand: routeState?.brand ?? '',
      model: routeState?.model ?? '',
      year: routeState?.year ?? '',
      price: routeState?.price ?? '',
    });
  }, [routeState, userLogged]);

  const updateField = (field) => {
    setFormData({
      ...formData,
      ...field,
    });
  };

  const handleVehicleFormSubmit = () => {
    if (isFormValid) {
      const { url, method } = routeState
        ? {
            url: `http://localhost:8080/vehicle/${routeState.id}`,
            method: 'put',
          }
        : {
            url: 'http://localhost:8080/vehicle',
            method: 'post',
          };

      fetch(url, {
        method,
        headers: {
          Accept: 'application/vnd.vtex.ds.v10+json',
          Authorization: `Bearer ${userLogged.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameBrand: formData.brand,
          model: formData.model,
          years: formData.year,
          price: formData.price.toString().replace(',', '.'),
        }),
      }).then(() => {
        history.push('/veiculos');
      });
    }
  };

  return (
    <GridFullHeight container direction="column" alignItems="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVehicleFormSubmit();
        }}
      >
        <FormControl data-testid="select-brand" variant="outlined" fullWidth>
          <InputLabel required id="selectMarca">
            Selecione uma marca
          </InputLabel>
          <Select
            required
            value={formData.brand}
            onChange={(e) =>
              updateField({
                brand: e.target.value,
              })
            }
          >
            {brandData.map((brand) => {
              return (
                <MenuItem key={brand.name} value={brand.name}>
                  {brand.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TextInput
          id="model"
          label="Modelo"
          required
          value={formData.model}
          onChange={(e) =>
            updateField({
              model: e.target.value,
            })
          }
        />
        <TextInput
          id="year"
          label="Ano"
          required
          value={formData.year}
          onChange={(e) =>
            updateField({
              year: e.target.value,
            })
          }
        />
        <TextInput
          id="value"
          label="Valor"
          required
          value={formData.price}
          onChange={(e) =>
            updateField({
              price: e.target.value,
            })
          }
        />

        <div style={{ display: 'flex' }}>
          <CustomButton
            style={{ marginRight: '10px' }}
            to="/veiculos"
            onClick={() => history.push('/veiculos')}
            type="reset"
            color="secondary"
            label="Cancelar"
          />
          <CustomButton
            type="submit"
            label="Salvar"
            className={classes.submitButton}
          />
        </div>
      </form>
    </GridFullHeight>
  );
};

export default VehicleForm;
