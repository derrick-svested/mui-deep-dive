import { createMuiTheme } from "@material-ui/core";
import { amber, indigo } from "@material-ui/core/colors";

const createTheme = (prefersDarkMode) =>
  createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: indigo[500],
        contrastText: "#fff",
      },
      secondary: {
        main: amber[500],
      },
    },
  });

export default createTheme;
