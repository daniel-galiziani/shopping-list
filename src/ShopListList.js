import React from 'react'
import Shop from './Shop';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';


function ShopListList({ shop, removeShop, toggleShop, editShop }){
    if (shop.length)
    return(
        <Paper>
            <List>
                {shop.map((shop,) => (
                    <>
                    <Shop 
                        task={shop.task} 
                        key={shop.id}
                        id={shop.id} 
                        completed={shop.completed} 
                        removeShop={removeShop}
                        toggleShop={toggleShop}
                        editShop={editShop}
                    />
                    <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}
export default ShopListList;