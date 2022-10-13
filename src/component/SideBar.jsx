import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarMenu = () => {
    <Sidebar breakPoint='md'>
        <Menu>
            <SubMenu label='Charts'>
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label='Maps'>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label='Theme'>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
            </SubMenu>
        </Menu>
    </Sidebar>;
};

export default SidebarMenu;
