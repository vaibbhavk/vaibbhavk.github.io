import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useState, createContext, useMemo } from "react";

import { Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer";

import SkillsPage from "./pages/skills";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import HomePage from "./pages/home";

import Layout from "./components/Layout";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Drawer colorMode={colorMode} />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Layout>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
