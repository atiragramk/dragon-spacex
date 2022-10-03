import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types";

import { authUserSet } from "../actions/auth";


const AUTH_SLICE_NAME = "AUTH_SLICE_NAME";

export type AuthState = {
    user: User | null;
}

const initialState: AuthState = {
    user: null
}


const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        authUserSet
    }
})

export const { authUserSet: authUserSetAction } = authSlice.actions

export default authSlice.reducer

