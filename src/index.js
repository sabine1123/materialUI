import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { zhTW } from "@mui/x-data-grid";
// import { zhTW as pickerszhTW } from "@mui/x-date-pickers";
import { zhTW as corezhTW } from "@mui/material/locale";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme(
    {
        typography: {
            fontFamily: ["Noto Sans TC", "Roboto", "Arial", "sans-serif"].join(
                ","
            ),
        },
        palette: {
            type: "light",
            primary: {
                main: "#0f5e0f",
            },
            secondary: {
                main: "#f39927",
            },
            text: {
                primary: "#2d2828",
            },
            // background: {
            //     default: "#f3f3f3",
            // },
            warning: {
                main: "#f7e419",
            },
            success: {
                main: "#95dc96",
            },
        },
        props: {
            MuiButton: {
                size: "small",
            },
            MuiButtonGroup: {
                size: "small",
            },
            MuiCheckbox: {
                size: "small",
            },
            MuiFab: {
                size: "small",
            },
            MuiFormControl: {
                margin: "dense",
                size: "small",
            },
            MuiFormHelperText: {
                margin: "dense",
            },
            MuiIconButton: {
                size: "small",
            },
            MuiInputBase: {
                margin: "dense",
            },
            MuiInputLabel: {
                margin: "dense",
            },
            MuiRadio: {
                size: "small",
            },
            MuiSwitch: {
                size: "small",
            },
            MuiTextField: {
                margin: "dense",
                size: "small",
            },
        },
    },
    zhTW, // core translations
    // pickerszhTW, // x-date-pickers translations
    corezhTW // core translations
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
