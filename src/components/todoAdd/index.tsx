import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Context } from '../../store'

interface prop {
    isShow: boolean;
    closeModel: () => void;
}

export default function FormDialog(props: prop) {
    const [value, setValue] = useState("");
    const [btnClick, setBtnClick] = useState(false);
    const myContext = Context();
    const handleSubmit = () => {
        props.closeModel();
        myContext.store.addTodo({
            id: +new Date(),
            value: value,
            computed: false,
        });
        setValue("");
        setBtnClick(false);
    };

    const handleClose = () => {
        props.closeModel();
    }

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim()) {
            setBtnClick(true);
        } else {
            setBtnClick(false);
        }
        setValue(e.target.value);
    }

    return (
        <div>
            <Dialog open={props.isShow} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Todo"
                        type="email"
                        fullWidth
                        onChange={changeValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary" disabled={!btnClick}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}