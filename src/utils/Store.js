import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";

const Store = configureStore({
    reducer :{
      toogleSlice : toogleSlice

    }
})


export default Store;