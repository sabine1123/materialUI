import * as React from "react";
import Permission from "./page/Permission";
import styles from "./common/Common.module.scss";
import SidebarMenu from "./component/SideBar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
    FaGlobe,
    FaPuzzlePiece,
    FaRegLightbulb,
    FaWallet,
    FaBriefcase,
    FaCog,
    FaChartBar,
    FaCubes,
    FaSignOutAlt,
} from "react-icons/fa";
import LogoImg from "./assets/logo.png";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar breakPoint='md'>
                <Menu>
                    <MenuItem>
                        <img
                            className={styles.logo}
                            src={LogoImg}
                            alt='logo'
                        ></img>
                    </MenuItem>
                    <SubMenu icon={<FaGlobe />} label='儀表板'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaPuzzlePiece />} label='權限管理'>
                        <MenuItem>員工列表</MenuItem>
                        <MenuItem>平台權限設定</MenuItem>
                        <MenuItem>備註紀錄調閱</MenuItem>
                        <MenuItem>員工密碼變更</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaRegLightbulb />} label='門禁系統'>
                        <MenuItem>門禁管理列表</MenuItem>
                        <MenuItem>刷卡紀錄</MenuItem>
                        <MenuItem>偵測紀錄</MenuItem>
                        <MenuItem>考勤管理</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaWallet />} label='監控系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaBriefcase />} label='話務系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaCog />} label='環控系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaChartBar />} label='體溫監測'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaCubes />} label='電子看板'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaSignOutAlt />}>登出</MenuItem>
                </Menu>
            </Sidebar>
            <div className={styles.content}>
                <Permission />
            </div>
        </div>
    );
};

export default App;
