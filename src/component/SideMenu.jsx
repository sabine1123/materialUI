import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@mui/material/Typography";

import { FaChevronDown } from "react-icons/fa";

const drawerWidth = 240;

function SideMenu(props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Accordion>
                <AccordionSummary
                    className={"panelSummary"}
                    expandIcon={<FaChevronDown />}
                >
                    <Typography className={"heading"}>Main title</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ListItem className={"innerMenuItem"} button key={1}>
                        <Typography className={"heading"}>
                            Sub Item 1
                        </Typography>
                    </ListItem>
                    <ListItem className={"innerMenuItem"} button key={2}>
                        <Typography className={"heading"}>
                            Sub Item 2
                        </Typography>
                    </ListItem>
                </AccordionDetails>
            </Accordion>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position='fixed'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                        <Typography variant='h6' noWrap>
                            Responsive drawer
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label='mailbox folders'
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default SideMenu;
