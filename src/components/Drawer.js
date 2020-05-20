import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../redux/actions/uiActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    height: 64,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
    },
  },
  listItemIcon: {
    color: "#b4b1b1",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const openDrawerState = useSelector(({ uiReducer }) => uiReducer.openDrawer);
  const handleDrawerClose = () => dispatch(closeDrawer());

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawerState,
          [classes.drawerClose]: !openDrawerState,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawerState,
            [classes.drawerClose]: !openDrawerState,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            className={classes.listItemIcon}
            onClick={() => handleDrawerClose()}
          >
            <Typography variant="h3" align="left">
              Menú
            </Typography>{" "}
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Box className={classes.list}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem className={classes.listItem} button key={index}>
                <ListItemIcon className={classes.listItemIcon}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  className={classes.listItemIcon}
                  primary={<Typography variant="h4">{text}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>
    </div>
  );
}
