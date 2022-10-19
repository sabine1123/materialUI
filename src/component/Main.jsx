import * as React from "react";
import styles from "../common/Common.module.scss";
import Permission from "../page/Permission";
import Button from "@mui/material/Button";

const Main = ({ handleToggleSidebar, handleCollapsedChange }) => {
    const onClick = (e) => {
        e.stopPropagation();
        console.log("click");
        handleToggleSidebar(true);
    };
    return (
        <div className={styles.mainWrap}>
            <Button
                color='secondary'
                variant='outlined'
                size='small'
                onClick={onClick}
            >
                Toggle
            </Button>
            <Permission />
        </div>
    );
};

export default Main;
