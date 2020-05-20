import React from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import UserIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  userRisk: {
    gridColumn: "1/3",
    gridRow: "1/2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      gridRow: "1/2",
      background: "red",
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.userRisk}>
      <UserIcon fontSize="large" />
      <Typography variant="h3">Usuarios sin riesgos</Typography>
    </Paper>
  );
};
