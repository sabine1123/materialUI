import * as React from "react";
import styles from "./TableWrap.module.scss";

const TableWrap = (props) => {
    const { title, children } = props;

    return (
        <div className={styles.tableWrap}>
            <div className={styles.head}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default TableWrap;
