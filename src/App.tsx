import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "./utility/Sweet_alert/Swal_custom.css";

import {
  ThemeProvider as ThemeProvider_mui,
  createTheme,
} from "@mui/material/styles";
import { getThemeColors, observeThemeChanges } from "./themeUtils";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  const [themeColors, setThemeColors] = useState<any>({});

  useEffect(() => {
    const update = () => setThemeColors(getThemeColors());
    update();
    const ob = observeThemeChanges(update);
    return () => ob.disconnect();
  }, []);

  const theme = createTheme({
    breakpoints: { values: { xs: 375, sm: 534, md: 640, lg: 1072, xl: 1520 } },
    typography: { fontFamily: "'Inter Variable', 'sans-serif'" },
    palette: {
      primary: { main: themeColors["primary"] || "#007bff" },
      secondary: { main: themeColors["secondary"] || "#6c757d" },
      error: { main: themeColors["error"] || "#dc3545" },
      warning: { main: themeColors["warning"] || "#ffc107" },
      info: { main: themeColors["info"] || "#17a2b8" },
      success: { main: themeColors["success"] || "#28a745" },
      background: {
        default: themeColors["base-100"] || "#ffffff",
        paper: themeColors["base-100"] || "#f5f5f5",
      },
      text: {
        primary: themeColors["base-content"] || "#212529",
        secondary: themeColors["base-content"] || "#212529",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: `0px solid ${themeColors["base-300"] || "#e5e7eb"}`,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: { color: themeColors["primary"] || "inherit" },
        },
      },
    },
  });

  return (
    <ThemeProvider_mui theme={theme}>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeProvider_mui>
  );
}

export default App;
