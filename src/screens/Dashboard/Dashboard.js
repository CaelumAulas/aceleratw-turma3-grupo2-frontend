import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { GridFullHeight } from "components/GridFullHeight/GridFullHeight";
import DashCard from "fragments/Dashboard/DashCard/DashCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  papersContainer: {
    height: "100%",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const mockedData = [
  {
    brand: "GM",
    quantity: 10,
    total: 50000,
  },
  {
    brand: "FIAT",
    quantity: 3,
    total: 20000,
  },
  {
    brand: "Renault",
    quantity: 2,
    total: 80000,
  },
];

const Dashboard = () => {
  const classes = useStyles();
  return (
    <GridFullHeight
      container
      direction="column"
      justify="center"
      alignItems="flex-end"
    >
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.papersContainer}
            justify="center"
            alignItems="center"
            spacing={2}
            wrap="wrap"
          >
            {mockedData.map(({ brand, total, quantity }, index) => (
              <DashCard
                brand={brand}
                value={total}
                quantity={quantity}
                key={index}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </GridFullHeight>
  );
};

export default Dashboard;