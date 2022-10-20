import React, { useState } from "react";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExportContainer,
    GridCsvExportMenuItem,
    GridPrintExportMenuItem,
    useGridApiContext,
    gridFilteredSortedRowIdsSelector,
    gridVisibleColumnFieldsSelector,
    // gridPageCountSelector,
    // gridPageSelector,
    // useGridSelector,
} from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import {
    AddButton,
    ModifyButton,
    EditButton,
} from "../../component/TableButton";

import MaintainPopup from "./MaintainPopup";

import ExcelJs from "exceljs";
// import { GridCsvExportOptions } from "@mui/x-data-grid";

// function CustomPagination() {
//     const apiRef = useGridApiContext();
//     const page = useGridSelector(apiRef, gridPageSelector);
//     const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//     return (
//         <Pagination
//             color='primary'
//             count={pageCount}
//             page={page + 1}
//             onChange={(event, value) => apiRef.current.setPage(value - 1)}
//         />
//     );
// }

const ExcelExportMenuItem = (props) => {
    const { hideMenu } = props;

    return (
        <MenuItem
            onClick={() => {
                const workbook = new ExcelJs.Workbook();
                const sheet = workbook.addWorksheet("職務權限設定清單", {
                    //列印設定
                    // pageSetup: {
                    //     printArea: "A1:B3",
                    // },
                });

                sheet.addTable({
                    style: {
                        theme: null,
                        // showRowStripes: true,
                    },
                    // 在工作表裡面指定位置、格式並用columsn與rows屬性填寫內容
                    name: "table1", // 表格內看不到的，算是key值，讓你之後想要針對這個table去做額外設定的時候，可以指定到這個table
                    ref: "A1", // 從A1開始
                    columns: [
                        { name: "名字" },
                        { name: "年齡" },
                        { name: "電話" },
                    ],
                    rows: [
                        ["小明", "20", "0987654321"],
                        ["小美", "23", "0912345678"],
                        ["小明", "20", "0987654321"],
                        ["小美", "23", "0912345678"],
                        ["小明", "20", "0987654321"],
                        ["小美", "23", "0912345678"],
                        ["小明", "20", "0987654321"],
                        ["小美", "23", "0912345678"],
                    ],
                });

                sheet.getColumn(1).width = 10;
                sheet.getColumn(2).width = 10;
                sheet.getColumn(3).width = 30;
                sheet.getColumn(1).hidden = true; //可隱藏

                workbook.xlsx.writeBuffer().then((content) => {
                    const link = document.createElement("a");
                    const blobData = new Blob([content], {
                        type: "application/vnd.ms-excel;charset=utf-8;",
                    });
                    link.download = "職務權限設定清單.xlsx";
                    link.href = URL.createObjectURL(blobData);
                    link.click();
                });

                // 關閉匯出menu
                hideMenu();
            }}
        >
            匯出Excel
        </MenuItem>
    );
};

const CustomExportButton = (props) => (
    <GridToolbarExportContainer {...props}>
        <GridCsvExportMenuItem
            options={{
                fileName: "customerDataBase",
                utf8WithBom: true,
            }}
        />
        <GridPrintExportMenuItem
        // options={{
        //     hideFooter: true,
        //     hideToolbar: true,
        //     fields: ["dep", "job", "status", "authority", "limit"],
        // }}
        />
        <ExcelExportMenuItem />
    </GridToolbarExportContainer>
);

const CustomToolbar = (props) => (
    <GridToolbarContainer {...props}>
        <CustomExportButton />
    </GridToolbarContainer>
);

const Result = () => {
    const RenderAuthority = (props) => {
        // const { hasFocus, value } = props;
        // const buttonElement = React.useRef(null);
        // const rippleRef = React.useRef(null);
        const handleClick = (e) => {
            e.stopPropagation();
            console.log("click", props);
        };

        const text = props.value === true ? "有效" : "未設定";

        return (
            <div>
                <span>{text}</span>
                {props.value === true ? (
                    <ModifyButton handleClick={handleClick}>
                        平台權限設定
                    </ModifyButton>
                ) : (
                    <AddButton handleClick={handleClick}>
                        平台權限新增
                    </AddButton>
                )}
            </div>
        );
    };

    const RenderAccessControl = (props) => {
        const handleClick = (e) => {
            e.stopPropagation();
            console.log("click", props);
        };

        const text = props.value === true ? "有效" : "無效";

        return (
            <div>
                <span>{text}</span>
                {props.value === true ? (
                    <ModifyButton handleClick={handleClick}>
                        門禁權限設定
                    </ModifyButton>
                ) : (
                    <AddButton handleClick={handleClick}>
                        門禁權限新增
                    </AddButton>
                )}
            </div>
        );
    };

    const RenderMaintain = (props) => {
        const onClick = (e) => {
            e.stopPropagation(); // don't select this row after clicking

            const api = props.api;
            const thisRow = {};

            api.getAllColumns()
                .filter((c) => c.field !== "__check__" && !!c)
                .forEach(
                    (c) =>
                        (thisRow[c.field] = props.getValue(props.id, c.field))
                );

            return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
            <div>
                <EditButton handleClick={onClick}>編輯</EditButton>
            </div>
        );
    };

    const columns = [
        {
            field: "action",
            headerName: "維護",
            sortable: false,
            // flex: 1,
            renderCell: RenderMaintain,
        },
        { field: "dep", headerName: "部門名稱", flex: 1 },
        { field: "job", headerName: "職務名稱", flex: 1 },
        {
            field: "status",
            headerName: "部門職務狀態",
            flex: 1,
            valueFormatter: (params) => {
                return params.value === true ? "有效" : "無效";
            },
        },
        {
            field: "authority",
            headerName: "平台權限",
            flex: 1,
            // width: 160,
            valueFormatter: (params) => {
                return params.value === true ? "有效" : "未設定";
            },
            renderCell: RenderAuthority,
        },
        {
            field: "limit",
            headerName: "門禁權限",
            flex: 1,
            valueFormatter: (params) => {
                return params.value === true ? "有效" : "無效";
            },
            renderCell: RenderAccessControl,
        },
    ];
    const rows = [
        {
            id: 1,
            dep: "系統管理部",
            job: "職員",
            status: true,
            authority: false,
            limit: false,
        },
        {
            id: 2,
            dep: "客務服務部",
            job: "職員",
            status: true,
            authority: true,
            limit: false,
        },
        {
            id: 3,
            dep: "營運部",
            job: "職員",
            status: true,
            authority: false,
            limit: true,
        },
        {
            id: 4,
            dep: "系統管理部",
            job: "主管",
            status: false,
            authority: true,
            limit: true,
        },
        {
            id: 5,
            dep: "客務服務部",
            job: "主管",
            status: true,
            authority: true,
            limit: true,
        },
        {
            id: 5,
            dep: "營運部",
            job: "主管",
            status: true,
            authority: false,
            limit: true,
        },
    ];

    const tableStyle = {
        // ".MuiDataGrid-columnHeaders": {
        //     backgroundColor: "#606060",
        //     color: "#fff",
        //     ".MuiDataGrid-iconButtonContainer": {
        //         svg: {
        //             color: "#ccc",
        //         },
        //     },
        // },
        // ".MuiDataGrid-columnSeparator": {
        //     display: "none",
        // },
        "&.MuiDataGrid-root": {
            border: "none",
        },
        ".MuiDataGrid-toolbarContainer": {
            padding: "10px 0",
            justifyContent: "flex-end",
        },
        ".MuiDataGrid-cell": {
            ">div": {
                ">span": {
                    minWidth: "50px",
                    display: "inline-block",
                },
            },
        },
        // "@media print": {
        //     ".MuiDataGrid-main": { color: "#000", maxWidth: 700 },
        // },
    };

    return (
        <div style={{ height: "60vh", width: "100%" }}>
            <DataGrid
                // {...data}
                // loading={loading}
                // getRowHeight={() => "auto"}
                sx={tableStyle}
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: CustomToolbar,
                    // Pagination: CustomPagination,
                }}
                // componentsProps={{
                //     toolbar: {
                //         csvOptions: {
                //             getRowsToExport: () =>
                //                 gridFilteredSortedRowIdsSelector(apiRef),
                //         },
                //     },
                // }}
                pagination
                pageSize={10}
                rowsPerPageOptions={[10, 25, 50]}
            />

            <MaintainPopup />
        </div>
    );
};

export default Result;
