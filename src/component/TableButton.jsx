import * as React from "react";
import Button from "@mui/material/Button";
// import * as Icons from "react-icons/fa";
import {
    FaExpand,
    FaExpandAlt,
    FaPlus,
    FaSyncAlt,
    FaSearch,
    FaHistory,
    FaRegEdit,
    FaRegSun,
    FaTimes,
    FaSave,
} from "react-icons/fa";

export const ModifyButton = (props) => {
    const { handleClick, children } = props;
    return (
        <Button
            component='button'
            variant='contained'
            size='small'
            style={{ marginLeft: 16 }}
            onClick={handleClick}
            startIcon={<FaRegSun />}
        >
            {children}
        </Button>
    );
};

export const AddButton = (props) => {
    const { handleClick, children } = props;
    return (
        <Button
            component='button'
            variant='contained'
            color='warning'
            sx={{
                ".MuiButton-containedWarning": { color: "#fff" },
            }}
            size='small'
            style={{ marginLeft: 16 }}
            onClick={handleClick}
            startIcon={<FaRegSun />}
        >
            {children}
        </Button>
    );
};

export const EditButton = (props) => {
    const { handleClick, children } = props;
    return (
        <Button
            color='secondary'
            variant='contained'
            size='small'
            onClick={handleClick}
            startIcon={<FaRegEdit />}
        >
            {children}
        </Button>
    );
};

export const ToolButton = (props) => {
    const { icon, handleClick, children } = props;
    const components = {
        FaExpand: FaExpand,
        FaExpandAlt: FaExpandAlt,
        FaPlus: FaPlus,
        FaSyncAlt: FaSyncAlt,
        FaSearch: FaSearch,
        FaHistory: FaHistory,
    };
    const IconComponent = () => {
        const Icons = components[icon];
        return <Icons />;
    };
    return (
        <Button
            component='button'
            variant='outlined'
            color='success'
            size='small'
            style={{ marginLeft: 16 }}
            onClick={handleClick}
            startIcon={<IconComponent />}
        >
            {children}
        </Button>
    );
};

export const ConfirmButton = (props) => {
    const { handleClick, children } = props;
    return (
        <Button
            component='button'
            variant='contained'
            color='primary'
            size='small'
            style={{ marginLeft: 16 }}
            onClick={handleClick}
            startIcon={<FaSave />}
        >
            {children}
        </Button>
    );
};

export const CloseButton = (props) => {
    const { handleClick, children } = props;
    return (
        <Button
            component='button'
            variant='contained'
            color='error'
            sx={{
                ".MuiButton-containedError": { color: "#fff" },
            }}
            size='small'
            style={{ marginLeft: 16 }}
            onClick={handleClick}
            startIcon={<FaTimes />}
        >
            {children}
        </Button>
    );
};
