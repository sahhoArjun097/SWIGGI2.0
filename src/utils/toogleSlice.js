import { createSlice } from "@reduxjs/toolkit";

const toogleSlice =  createSlice({
    name : "toogleSlice",
    initialState:{
        searchToogle :false,
    },
    reducers:{
        tooglepopbar : ( state) => { 
            state.searchToogle = !state.searchToogle
        }

    }
})
export const {tooglepopbar } = toogleSlice.actions
export default  toogleSlice.reducer