import React, { useCallback, useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { GridFullHeight } from 'components/GridFullHeight/GridFullHeight';
import DashCard from 'fragments/Dashboard/DashCard';

import { BASE_URL } from 'api/config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  papersContainer: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [vehiclesResponse, setVehiclesResponse] = useState([]);

  const formatVehiclesResponse = useCallback((response) => {
    return response.reduce((acc, { brand, brandId, model, price }) => {
      const brandIndexInAccumulator = acc.findIndex(
        (acc) => acc.brandName === brand
      );

      if (brandIndexInAccumulator !== -1) {
        const mergedVehicles = [
          ...acc[brandIndexInAccumulator].vehicles,
          {
            model,
            price,
          },
        ];

        const totalValue = mergedVehicles.reduce((acc, vehicleMerged) => {
          acc = acc + vehicleMerged.price;
          return acc;
        }, 0);

        const newAccumulator = {
          ...acc[brandIndexInAccumulator],
          vehicles: mergedVehicles,
          quantity: acc[brandIndexInAccumulator].quantity + 1,
          total: totalValue,
        };

        acc[brandIndexInAccumulator] = newAccumulator;

        return acc;
      }

      return [
        ...acc,
        {
          brandName: brand,
          vehicles: [
            {
              model,
              price,
            },
          ],
          quantity: 1,
          total: price,
        },
      ];
    }, []);
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/vehicle`)
      .then((data) => data.json())
      .then((response) =>
        setVehiclesResponse(formatVehiclesResponse(response.content))
      );
  }, [formatVehiclesResponse]);

  return (
    <GridFullHeight container direction="column" alignItems="center">
      <Grid container direction="column" className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.papersContainer}
          >
            {vehiclesResponse.map(({ brandName, total, quantity }, index) => (
              <DashCard
                key={index}
                brand={brandName}
                value={total}
                quantity={quantity}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </GridFullHeight>
  );
};

export default Dashboard;
