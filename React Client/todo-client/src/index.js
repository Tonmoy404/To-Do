import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={Routes} />
  </ThemeProvider>
);
