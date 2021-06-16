/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
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
  makeStyles,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import UserLoggedContext from "../../contexts/UserLoggedContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const userLogged = useContext(UserLoggedContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function getMenuTitle(path) {
    switch (path) {
      case "/marcas":
        return "Marcas";
      case "./usuarios":
        return "Usuários";
      case "./dashboard":
        return "Dashboard";
      case "./login":
        return "Entrar";
      case "./veiculos":
        return "Veículos";
      default:
        return "";
    }
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to={"./login"}>
          <ListItemText primary="Entrar" />
        </ListItem>

        <ListItem button component={Link} to={"./veiculos"}>
          <ListItemText primary="Veículos" />
        </ListItem>

        {userLogged.token &&
          ["./dashboard", "/marcas", "./usuarios"].map((path) => (
            <ListItem
              button
              component={Link}
              key={getMenuTitle(path)}
              to={path}
            >
              <ListItemText primary={getMenuTitle(path)} />
            </ListItem>
          ))}

        {!userLogged.token && (
          <ListItem component={Link} to="/">
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

export default PageHeader;
