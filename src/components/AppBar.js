import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Notification from "@material-ui/icons/NotificationImportantRounded";
import clsx from "clsx";
import Drawer from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../redux/actions/uiActions";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  notification: {
    height: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "12%",
    minWidth: "250px",
    maxWidth: "300px",
  },
}));

export default ({ title }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const openDrawerState = useSelector(({ uiReducer }) => uiReducer.openDrawer);

  const handleDrawerOpen = () => {
    dispatch(openDrawer());
  };
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawerState,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            onClick={() => handleDrawerOpen()}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            <Box ml={4}>
              <Typography variant="h1">{title}</Typography>
            </Box>
          </IconButton>
          <Box className={classes.user}>
            <Box className={classes.notification}>
              <Notification color="black" />
            </Box>
            <Avatar />
            <Typography variant="h3">Cristian Ronda</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer />
    </>
  );
};
