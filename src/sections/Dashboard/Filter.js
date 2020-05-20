import React from "react";
import { makeStyles, Box, Typography, Paper, Button } from "@material-ui/core";
import Slider from "../../components/Slider";

const useStyles = makeStyles((theme) => ({
  filter: {
    gridColumn: "1/3",
    gridRow: "2/4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      gridColumn: "1/4",
      gridRow: "3/4",
      background: "red",
    },
  },
  d: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: theme.spacing(1),
  },
  textPeriod: {
    color: "blue",
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.filter}>
      <Slider title="Objetivo" />
      <Slider title="Deposito inicial" />
      <Slider title="Pago mensual" />
      <Box className={classes.d}>
        <Typography variant="h2">Periodo</Typography>
        <Typography variant="h2" className={classes.textPeriod}>
          - 5 años +
        </Typography>
      </Box>
      <Box className={classes.d}>
        <Button variant="contained" disabled>
          Cancelar
        </Button>
        <Button variant="contained">Aceptar</Button>
      </Box>
    </Paper>
  );
};
