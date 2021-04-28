import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MainLayout from "./layouts/main";
import Dashboard from "./components/Dashboard";
import createTheme from "./styles/theme";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, toggleColorMode] = useState(prefersDarkMode);

  return (
    <>
      <ThemeProvider theme={createTheme(isDarkMode)}>
        <CssBaseline />
        <MainLayout
          isDarkMode={isDarkMode}
          handleThemeChange={() => toggleColorMode(!isDarkMode)}
        >
          <Dashboard />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
