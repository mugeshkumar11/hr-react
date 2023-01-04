import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartitem:[],
    carttotalquantity:0,
    carttotalamount:0,
}

const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state, action){
              
           const itemindex = state.cartitem.findIndex(item =>item.id===action.payload.id)
            
           if(itemindex >= 0){
            state.cartitem[itemindex].cartquantity+=1
           }else{
            const tempproduct = {...action.payload,cartquantity:1}
            state.cartitem.push(tempproduct)
           }
           
        }
    }

})

export const {addtocart} = cartslice.actions;


export default cartslice.reducer;