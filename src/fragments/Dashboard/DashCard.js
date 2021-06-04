import React from "react";

import {
  Grid,
  Paper,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: 0,
      marginBottom: 20,
    },
    marginRight: 20,
  },
  paper: {
    height: 400,
    width: "100%",
  },
  paperContent: {
    height: "100%",
  },
}));

const DashCard = ({ size, brand, quantity, value }) => {
  const classes = useStyles();
  return (
    <Grid md={size} item className={classes.paperContainer}>
      <Paper className={classes.paper}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.paperContent}
        >
          <Typography align="center" variant="h3" component="h3">
            {brand}
          </Typography>
          <Container>
            <Typography align="center" variant="inherit" component="p">
              {quantity} {quantity > 1 ? "veículos" : "veículo"}
            </Typography>
            <Typography align="center" variant="inherit" component="p">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(value)}
            </Typography>
          </Container>
        </Grid>
      </Paper>
    </Grid>
  );
};

DashCard.propTypes = {
  size: PropTypes.number,
  brand: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

DashCard.defaultProps = {
  size: 2,
};

export default DashCard;
