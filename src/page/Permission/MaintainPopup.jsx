import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ConfirmButton, CloseButton } from "../../component/TableButton";

const MaintainPopup = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={false} onClose={handleClose} maxWidth={750}>
            <DialogTitle>職務設定</DialogTitle>
            <DialogContent>
                <Box sx={{ paddingTop: "5px" }}>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <TextField
                                id='dep'
                                label='部門名稱'
                                defaultValue='系統管理部'
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={4}>
                            <TextField
                                id='title'
                                label='職務名稱'
                                defaultValue='系統管理'
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <FormLabel id='status'>狀態</FormLabel>
                                <RadioGroup row aria-labelledby='status'>
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio />}
                                        label='有效'
                                    />
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio />}
                                        label='無效'
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item md={10}>
                            <TextField
                                fullWidth
                                label='備註'
                                multiline
                                rows={4}
                                placeholder='請輸入備註資料'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <ConfirmButton onClick={handleClose}>存檔</ConfirmButton>
                <CloseButton onClick={handleClose}>關閉</CloseButton>
            </DialogActions>
        </Dialog>
    );
};

export default MaintainPopup;
