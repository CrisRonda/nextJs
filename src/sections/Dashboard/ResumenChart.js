import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import Chart from "../../components/Chart";
import InfoCard from "../../components/InfoCard";
const useStyles = makeStyles((theme) => ({
  resume: {
    gridColumn: "3/7",
    gridRow: "2/4",
    display: "flex",
    flexDirection: "row",
  },
  infoCardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  correctBalance: {
    color: "green",
  },
  badBalance: {
    color: "pink",
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.resume}>
      <Box width="60%">
        <Chart />
      </Box>
      <Box width="40%" pt={2}>
        <Typography variant="h1">Historial</Typography>
        <InfoCard title="Promedio" value={23} balance={12} />
        <InfoCard title="Promedio" value={23} balance={-12} />
        <InfoCard title="Promedio" value={23} balance={0.3} />
      </Box>
    </Paper>
  );
};
