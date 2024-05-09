import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    user: localStorage.getItem("user"),
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.user = null;
            localStorage.removeItem("user");
            try {
                axios.post("http://localhost:8080/auth/logout", {}, {
                    withCredentials: "true"
                });
            } catch (e) {
                console.log(e);
            }
        }
    }
})

export const {
    login,
    logout
} = userSlice.actions;

export default userSlice.reducer;