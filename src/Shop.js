import React from 'react';
import EditShopForm from './EditShopForm';
import useToggleState from "./Hooks/useToggleState"
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

function Shop({ task, completed, removeShop, id, toggleShop, editShop }){
    const [isEditing, toggleIsEditing] = useToggleState()
    return (
        <ListItem style={{height:"64px"}}>
            {isEditing ? <EditShopForm 
                editShop={editShop} 
                id={id} 
                task={task} 
                toggleIsEditing={toggleIsEditing} 
            /> : 
            <>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed} 
                    onClick={() => toggleShop(id)} 
                />
                <ListItemText style={{ textDecoration: completed ? "line-through": "none" }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => removeShop(id) }>
                        <Delete />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Shop;