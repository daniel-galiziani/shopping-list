import React from 'react'
import useShopState from './Hooks/useShopState';
import ShopListList from './ShopListList';
import ShopListForm from './ShopListForm';
import { Typography, Paper, AppBar, Toolbar, Grid  } from '@material-ui/core';



function ShopListApp(){
    const initialShop = [{ id:1, task:"Milk", completed:false }];
    const {shop, addShop, removeShop, toggleShop, editShop} = useShopState(
        initialShop
        );

    return (
        <Paper 
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">SHOPPING LIST WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <ShopListForm addShop={addShop} />
                    <ShopListList 
                        shop={shop} 
                        removeShop={removeShop} 
                        toggleShop={toggleShop} 
                        editShop={editShop}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ShopListApp;