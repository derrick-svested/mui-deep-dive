import CssBaseline from "@material-ui/core/CssBaseline";

import MainLayout from "./layouts/main";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </>
  );
}

export default App;
