import * as React from "react";
import Result from "./result";
import TableWrap from "../../component/TableWrap";
import { zhTW } from "@mui/x-data-grid";
// import { zhTW as pickerszhTW } from "@mui/x-date-pickers";
import { zhTW as corezhTW } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme(
    {
        palette: {
            primary: { main: "#1976d2" },
        },
    },
    zhTW, // core translations
    // pickerszhTW, // x-date-pickers translations
    corezhTW // core translations
);

const Permission = () => {
    return (
        <TableWrap title={"職務權限設定清單"}>
            <Result />
        </TableWrap>
    );
};

export default Permission;
