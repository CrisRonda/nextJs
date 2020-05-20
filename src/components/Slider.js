import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { Box, Typography, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(3),
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const MySlider = withStyles({
  root: {
    color: "#3244aa",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    color: "green",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function SliderComponent({ title = "" }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.labels}>
        <Typography variant="h2" id="continuous-slider" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h3" id="continuous-slider" gutterBottom>
          {value}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs>
          <MySlider
            onChange={handleChange}
            aria-label="custom thumb label"
            defaultValue={20}
          />
        </Grid>
      </Grid>
    </div>
  );
}
