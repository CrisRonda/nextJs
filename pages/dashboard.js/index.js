import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Layout } from "../../src/components/Layout";
import Stepper from "../../src/components/Stepper";
import UserRisk from "../../src/sections/Dashboard/UserRisk";
import Topics from "../../src/sections/Dashboard/Topics";
import Filter from "../../src/sections/Dashboard/Filter";
import ResumenChart from "../../src/sections/Dashboard/ResumenChart";

const useStyles = makeStyles((theme) => ({
  containerProgress: {
    display: "flex",
    width: "calc(100%-73px)",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 73,
    padding: theme.spacing(2),
  },
  graph: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(6, minmax(200px, 1fr))",
    gridTemplateRows: "64px repeat(2, minmax(275px, 1fr))",
    gridGap: "2rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "calc(100%-73px)",
      width: "100%",
      gridTemplateRows: "64px repeat(12, minmax(275px, 1fr))",
      gridGap: "2rem",
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Layout title="Dashboard">
      <Box className={classes.containerProgress}>
        <Stepper />
        <Box className={classes.graph}>
          <UserRisk />
          <Topics />
          <Filter />
          <ResumenChart />
        </Box>
      </Box>
    </Layout>
  );
};
