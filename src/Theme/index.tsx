import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffffff",
    },
    type: "light",
    background: {
      default: "#ffffff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
});

export default Theme;
