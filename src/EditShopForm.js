import React from 'react';
import useInputState from './Hooks/useInputState';
import { TextField } from '@material-ui/core';


function EditShopForm({ id, task, editShop, toggleIsEditing}){
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                editShop(id, value);
                reset();
                toggleIsEditing();
        }}
            style={{ marginLeft:"1rem", width:"40%"}}
        >
            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange} 
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditShopForm;