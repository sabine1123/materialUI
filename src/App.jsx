import React, { useState } from "react";

import styles from "./common/Common.module.scss";
import Aside from "./component/Aside";
import Main from "./component/Main";

const App = () => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={styles.wrapper}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className={styles.content}>
                <Main
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
            </div>
        </div>
    );
};

export default App;
