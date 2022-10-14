import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { zhTW } from "@mui/x-data-grid";
// import { zhTW as pickerszhTW } from "@mui/x-date-pickers";
import { zhTW as corezhTW } from "@mui/material/locale";
import CssBaseline from "@mui/material/CssBaseline";
import { ProSidebarProvider } from "react-pro-sidebar";

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
                main: "#364968",
            },
            secondary: {
                main: "#a5becc",
            },
            text: {
                primary: "#364968",
                disabled: "#c7c7c7",
                secondary: "#a5becc",
                hint: "#000",
            },
            background: {
                default: "#F9F9F9",
            },
            warning: {
                main: "#fddf97",
            },
            success: {
                main: "#84acb6",
            },
            error: {
                main: "#e09664",
            },
            info: {
                main: "#fff",
            },
        },
        // palette: {
        //     type: "light",
        //     primary: {
        //         main: "#606060",
        //     },
        //     secondary: {
        //         // main: "#f39927",
        //         main: "#468746",
        //     },
        //     text: {
        //         primary: "#2d2828",
        //         disabled: "#c7c7c7",
        //         secondary: "#565656",
        //         hint: "#000000",
        //     },
        //     // background: {
        //     //     default: "#f3f3f3",
        //     // },
        //     warning: {
        //         // main: "#f7e419",
        //         main: "#f39927",
        //     },
        //     success: {
        //         main: "#95dc96",
        //     },
        // },
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
