import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const GridFullHeight = styled(Grid)(({theme}) => ({
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    height: "100%"
  }
}));
