import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  FormControl,
  Button,
  Link,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Mail from "@material-ui/icons/Mail";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: theme.spacing(5),
    justifyContent: "center",
    position: "relative",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    backgroundColor: "white",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  mensajeGitHub: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));
export default (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={classes.root}>
      <Typography align="center" variant="h1">
        Bienvenido al login
      </Typography>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">Tu correo</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type="mail"
          value={values.password}
          onChange={handleChange("email")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle mail"
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <Mail />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box className={classes.rowContainer}>
        <Link href="/dashboard" as={`/dashboard`}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </Box>
      <Link color="textPrimary" component="a" className={classes.mensajeGitHub}>
        Mira el código fuente en GitHub
      </Link>
    </Box>
  );
};
