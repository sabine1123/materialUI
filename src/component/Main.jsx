import * as React from "react";
import Permission from "../page/Permission";
import Button from "@mui/material/Button";

const Main = ({ handleToggleSidebar, handleCollapsedChange }) => {
    const onClick = (e) => {
        e.stopPropagation();
        console.log("click");
        handleToggleSidebar(true);
    };
    return (
        <>
            <Button
                color='secondary'
                variant='outlined'
                size='small'
                onClick={onClick}
            >
                Toggle
            </Button>
            <Permission />
        </>
    );
};

export default Main;
