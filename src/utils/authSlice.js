import { createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        userData: JSON.parse(localStorage.getItem("userData")) || null
    },

    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload
            localStorage.setItem("userData", JSON.stringify(action.payload))

        },
        removeUser: (state) => {
            state.userData = null
            localStorage.removeItem("userData")

        }
    }
})
export const { addUser, removeUser } = authSlice.actions
export default authSlice.reducer;