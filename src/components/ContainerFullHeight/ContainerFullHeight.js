import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const ContainerFullHeight = styled(Container)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    height: '100%',
  },
}));
