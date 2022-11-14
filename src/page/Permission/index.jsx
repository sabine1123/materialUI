import React, { useState, useEffect } from "react";
import Result from "./result";
import TableWrap from "../../component/TableWrap";
import { ToolButton } from "../../component/TableButton";
import styles from "../../component/TableWrap.module.scss";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import SideMenu from "../../component/SideMenu";

import { apiData } from "../../utils/getApi.js";

const DepartmentSelect = () => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid xs={12} md={3}>
                    <FormControl sx={{ width: "100%" }} size='small'>
                        <InputLabel id='departmentSelect'>部門名稱</InputLabel>
                        <Select
                            labelId='departmentSelect'
                            id='departmentSelect'
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label='Age'
                        >
                            <MenuItem value=''>
                                <em>---</em>
                            </MenuItem>
                            <MenuItem value={10}>Twenty</MenuItem>
                            <MenuItem value={21}>Twenty one</MenuItem>
                            <MenuItem value={22}>
                                Twenty one and a half
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} md={3}>
                    <FormControl sx={{ width: "100%" }} size='small'>
                        <InputLabel id='departmentSelect'>職務名稱</InputLabel>
                        <Select
                            labelId='departmentSelect'
                            id='departmentSelect'
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label='Age'
                        >
                            <MenuItem value=''>
                                <em>---</em>
                            </MenuItem>
                            <MenuItem value={10}>Twenty</MenuItem>
                            <MenuItem value={21}>Twenty one</MenuItem>
                            <MenuItem value={22}>
                                Twenty one and a half
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

const Permission = () => {
    const requestUrl = "http://localhost:3005/data";
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const item = await apiData();
                console.log("item-----", item);
                setData(item.data);
                return { item };
            } catch (err) {
                console.error(err);
            }
        }

        console.log(getData());
        console.log("execute function in useEffect");
    }, []);
    const reloadClick = (e) => {
        e.stopPropagation();
        console.log("reloadClick");
    };
    const fullClick = (e) => {
        e.stopPropagation();
        console.log("fullClick");
    };

    return (
        <>
            <TableWrap title={"條件"}>
                <div className={styles.btnWrap}>
                    <ToolButton icon={"FaSearch"} handleClick={reloadClick}>
                        查詢
                    </ToolButton>
                    <ToolButton icon={"FaPlus"} handleClick={fullClick}>
                        新增部門
                    </ToolButton>
                    <ToolButton icon={"FaPlus"} handleClick={reloadClick}>
                        新增職務
                    </ToolButton>
                    <ToolButton icon={"FaHistory"} handleClick={fullClick}>
                        清除
                    </ToolButton>
                </div>
                <DepartmentSelect />
            </TableWrap>
            <TableWrap title={"職務權限設定清單"}>
                <div className={styles.btnWrap}>
                    <ToolButton icon={"FaSyncAlt"} handleClick={reloadClick}>
                        重新整理
                    </ToolButton>
                    <ToolButton icon={"FaExpand"} handleClick={fullClick}>
                        全螢幕
                    </ToolButton>
                </div>
                <Result getData={data} />
            </TableWrap>
        </>
    );
};

export default Permission;
