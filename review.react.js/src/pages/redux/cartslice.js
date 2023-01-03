import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';

const initialState = {
    cartitem:[],
    carttotalquantity:0,
    carttotalamount:0,
}

const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state, Action){
            state.cartitem.push(Action.payload)
        }
    }

})

export const {addtocart} = cartslice.actions;


export default cartslice.reducer;