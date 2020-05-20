import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
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

export default ({ title, value, balance }) => {
  const classes = useStyles();
  return (
    <Box m={4}>
      <Box className={classes.infoCardContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h2">{value}</Typography>
      </Box>
      <Typography
        variant="h2"
        className={clsx(classes.root, {
          [classes.correctBalance]: balance > 0,
          [classes.badBalance]: balance <= 0,
        })}
      >
        {balance > 0 ? "+" + balance : balance}
      </Typography>
    </Box>
  );
};
