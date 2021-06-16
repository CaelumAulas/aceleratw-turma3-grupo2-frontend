import React from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

import useLoadingContext from "hooks/useLoadingContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Loading() {
  const { loading, setLoading } = useLoadingContext();
  const classes = useStyles();

  const handleClose = () => {
    setLoading(false);
  };

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
