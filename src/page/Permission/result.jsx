import * as React from "react";
// import PropTypes from "prop-types";
import { useDemoData } from "@mui/x-data-grid-generator";
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
import { AddButton, ModifyButton } from "../../component/TableButton";

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

const getJson = (apiRef) => {
    // Select rows and columns
    const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
    const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

    // Format the data. Here we only keep the value
    const data = filteredSortedRowIds.map((id) => {
        const row = {};
        visibleColumnsField.forEach((field) => {
            row[field] = apiRef.current.getCellParams(id, field).value;
        });
        return row;
    });

    // Stringify with some indentation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
    return JSON.stringify(data, null, 2);
};

const exportBlob = (blob, filename) => {
    // Save the blob in a json file
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    });
};

const ExcelExportMenuItem = (props) => {
    const apiRef = useGridApiContext();

    const { hideMenu } = props;

    return (
        <MenuItem
            onClick={() => {
                const jsonString = getJson(apiRef);
                const blob = new Blob([jsonString], {
                    type: "text/json",
                });

                exportBlob(blob, "DataGrid_demo.json");

                // Hide the export menu after the export
                // hideMenu?.();
            }}
        >
            匯出Excel
        </MenuItem>
    );
};

// ExcelExportMenuItem.propTypes = {
//     hideMenu: PropTypes.func,
// };

const CustomExportButton = (props) => (
    <GridToolbarExportContainer {...props}>
        <GridCsvExportMenuItem />
        <GridPrintExportMenuItem />
        <ExcelExportMenuItem />
    </GridToolbarExportContainer>
);

const CustomToolbar = (props) => (
    <GridToolbarContainer {...props}>
        <CustomExportButton />
    </GridToolbarContainer>
);

const Result = () => {
    // const { data, loading } = useDemoData({
    //     dataSet: "Commodity",
    //     rowLength: 20,
    //     maxColumns: 8,
    // });
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
    const columns = [
        {
            field: "action",
            headerName: "維護",
            sortable: false,
            // flex: 1,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api.getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach(
                            (c) =>
                                (thisRow[c.field] = params.getValue(
                                    params.id,
                                    c.field
                                ))
                        );

                    return alert(JSON.stringify(thisRow, null, 4));
                };

                return (
                    <Button
                        color='secondary'
                        variant='contained'
                        size='small'
                        onClick={onClick}
                    >
                        編輯
                    </Button>
                );
            },
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
            renderCell: RenderAuthority,
        },
        {
            field: "limit",
            headerName: "門禁權限",
            flex: 1,
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
        ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#606060",
            color: "#fff",
            ".MuiDataGrid-iconButtonContainer": {
                svg: {
                    color: "#ccc",
                },
            },
        },
        ".MuiDataGrid-columnSeparator": {
            display: "none",
        },
        "&.MuiDataGrid-root": {
            border: "none",
        },
        ".MuiDataGrid-toolbarContainer": {
            padding: "10px 0",
            justifyContent: "flex-end",
        },
        ".MuiDataGrid-cell": {
            span: {
                minWidth: "50px",
                display: "inline-block",
            },
        },
        ".MuiButton-text": {
            border: "1px solid #468746",
            color: "#468746",
        },
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
                pagination
                pageSize={10}
                rowsPerPageOptions={[10, 25, 50]}
            />
        </div>
    );
};

export default Result;
