import { SWRConfig } from "swr";
import { Box, makeStyles } from "@material-ui/core";
import Head from "next/head";
import AppBar from "./AppBar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

export const siteTitle = "Next.js";
const fetcher = async (query) => {
  const url = process.env.rapidURL;
  const host = process.env.rapidHeaders.rapidApiHost;
  const key = process.env.rapidHeaders.rapidApiKey;
  const urlQuery = url + query;
  const resp = await axios.get(urlQuery, {
    headers: {
      "x-rapidapi-host": host,
      "x-rapidapi-key": key,
    },
  });
  return resp.data;
};
const useStyles = makeStyles((theme) => {
  const drawerWidth = 240;
  return {
    root: {
      display: "flex",
      flex: 1,
      margin: 0,
      marginLeft: 0,
      padding: 0,
      width: "100%",
      ...theme.mixins.toolbar,
    },
    marginDrawerClose: {
      marginLeft: 0,
      width: "100%",
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
    marginDrawerOpen: {
      marginLeft: drawerWidth,
      width: `calc(100%-${drawerWidth})`,
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
    },
    margin: {
      marginTop: 80,
    },
  };
});
export function Layout({ isLanding, children, title = "", siteTitle = "App" }) {
  const classes = useStyles();
  const openDrawerState = useSelector(({ uiReducer }) => uiReducer.openDrawer);

  return (
    <SWRConfig value={{ fetcher }}>
      {!isLanding && <AppBar title={title} />}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box
        className={
          (clsx(classes.root),
          {
            [classes.margin]: !isLanding,
            [classes.marginDrawerClose]: !openDrawerState,
            [classes.marginDrawerOpen]: openDrawerState,
          })
        }
      >
        {children}
      </Box>
    </SWRConfig>
  );
}
