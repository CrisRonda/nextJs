import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "60%",
    position: "relative",
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
  credits: {
    position: "absolute",
    left: 16,
    bottom: 16,
    fontWeight: 900,
    color: "#fff",
  },
});
export default (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img className={classes.img} src="/images/login_hero.jpg" />
      <Typography className={classes.credits} variant="h3">
        Créditos a Pixabay
      </Typography>
    </Box>
  );
};
