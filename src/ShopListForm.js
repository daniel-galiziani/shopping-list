import React from 'react'
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';

function ShopListForm({ addShop }){
    const [value, handleChange, reset] = useInputState("");
    return(
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={ e=> {
                e.preventDefault();
                addShop(value);
                reset();
                }} 
            >

            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal" 
                label="Add New List Item" 
            />
            </form>
        </Paper>
    )
}

export default ShopListForm;