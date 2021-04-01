import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "Routes";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
