/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

import UserLoggedContext from 'contexts/UserLoggedContext';

import headerStyles from './styles';

const PageHeader = (props) => {
  const classes = headerStyles();
  const location = useLocation();
  const userLogged = useContext(UserLoggedContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function getMenuTitle(path) {
    switch (path) {
      case '/marcas':
        return 'Marcas';
      case '/usuarios':
        return 'Usuários';
      case '/dashboard':
        return 'Dashboard';
      case '/login':
        return 'Entrar';
      case '/veiculos':
        return 'Veículos';
      default:
        return '';
    }
  }

  function logoff() {
    userLogged.token = '';
    return <Redirect to="/" />;
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {!userLogged.token && (
          <ListItem button component={Link} to={'/login'}>
            <ListItemText primary="Entrar" />
          </ListItem>
        )}

        <ListItem button component={Link} to={'/veiculos'}>
          <ListItemText primary="Veículos" />
        </ListItem>

        {userLogged.token &&
          ['/dashboard', '/marcas', '/usuarios'].map((path) => (
            <ListItem
              button
              component={Link}
              key={getMenuTitle(path)}
              to={path}
            >
              <ListItemText primary={getMenuTitle(path)} />
            </ListItem>
          ))}

        {userLogged.token && (
          <ListItem button component={Link}>
            <ListItemText primary="Sair" onClick={logoff} />
          </ListItem>
        )}

        {!userLogged.token && (
          <ListItem button component={Link} to="/">
            <ListItemText primary={location.text} />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Carango bom
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageHeader;
