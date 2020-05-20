import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  typography: {
    fontFamily: ["Amaranth", "Montserrat", "Nunito Sans", "sans-serif"],
    fontStyle: "normal",
    h1: {
      fontSize: 34,
      fontWeight: 800,
      color: "#474554",
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      color: "#aca7cb",
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
      color: "#797979",
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
      color: "#797979",
    },
    h6: {
      fontSize: 10,
      fontWeight: "normal",
      color: "#797979",
    },
    body1: {
      fontSize: 12,
      color: "#d4d4d4",
    },
  },

  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#0f0",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default responsiveFontSizes(theme);
