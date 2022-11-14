import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
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
import LogoImg from "../assets/logo.png";

import { Link } from "react-router-dom";

import "./Aside.scss";

const Aside = ({ toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            breakPoint='md'
            toggled={toggled}
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <Link to={"/"}>
                    <img src={LogoImg} alt='logo' className='logo' />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <SubMenu icon={<FaGlobe />} title='儀表板'>
                        <Link to={"/test"}>
                            <MenuItem>媽媽房備註</MenuItem>
                        </Link>
                    </SubMenu>
                    <SubMenu icon={<FaPuzzlePiece />} title='權限管理'>
                        <MenuItem>員工列表</MenuItem>
                        <MenuItem>平台權限設定</MenuItem>
                        <MenuItem>備註紀錄調閱</MenuItem>
                        <MenuItem>員工密碼變更</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaRegLightbulb />} title='門禁系統'>
                        <MenuItem>門禁管理列表</MenuItem>
                        <MenuItem>刷卡紀錄</MenuItem>
                        <MenuItem>偵測紀錄</MenuItem>
                        <MenuItem>考勤管理</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaWallet />} title='監控系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaBriefcase />} title='話務系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaCog />} title='環控系統'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaChartBar />} title='體溫監測'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaCubes />} title='電子看板'>
                        <MenuItem>媽媽房備註</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaSignOutAlt />}>登出</MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Aside;
