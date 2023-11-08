import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { theme } from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      <LandingPage />
    </>
  );
}

export default App;
