import * as React from "react";
import styles from "../common/Common.module.scss";
import Permission from "../page/Permission";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import Test from "../page/Test";

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

            <Routes>
                <Route path='/test' element={<Test />} />
                <Route path='/' element={<Permission />} />
            </Routes>
        </div>
    );
};

export default Main;
