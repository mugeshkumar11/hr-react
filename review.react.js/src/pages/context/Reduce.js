
export const initialstate = {
     event:[],
     Authenticated:JSON.parse(localStorage.getItem("islogged")) || false,
 };
 export const stateReducer = (state, action) =>{
     console.log("action", state, action);


     

 }