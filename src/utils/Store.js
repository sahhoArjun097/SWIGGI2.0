import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";
import cartSlice from "./cartSlice";

const Store = configureStore({
    reducer :{
       toogleSlice,
       cartSlice

    }
})


export default Store;