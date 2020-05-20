import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  labels: {
    gridColumn: "3/7",
    gridRow: "1/2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gridColumn: "1/4",
      gridRow: "2/3",
      background: "red",
    },
  },

  itemLabel: {
    display: "flex",
    alignItems: "center",
  },
  dotLabel: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.labels}>
      {[
        {
          color: "gray",
          text: "Conservado",
        },
        {
          color: "blue",
          text: "Balanceado",
        },
        {
          color: "pink",
          text: "Agresivo",
        },
        {
          color: "green",
          text: "Extremo",
        },
      ].map(({ color, text }) => (
        <Box key={text} className={classes.itemLabel}>
          <Box bgcolor={color} className={classes.dotLabel} />
          <Box m={4}>
            <Typography variant="h4">{text}</Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};
