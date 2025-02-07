import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const Store = configureStore({
    reducer :{
       toogleSlice,
       cartSlice,
       authSlice

    }
})


export default Store;