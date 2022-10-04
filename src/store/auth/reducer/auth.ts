import { createSlice } from "@reduxjs/toolkit";
import { Dragon, User } from "../../../types";

import { authUserSet, favouriteDragonsAdd, favouriteDragonsRemove, authUserSignOut } from "../actions/auth";


const AUTH_SLICE_NAME = "AUTH_SLICE_NAME";

export type AuthState = {
    user: User | null;
    dragons: Partial<Dragon>[] | []
}

const initialState: AuthState = {
    user: null,
    dragons: []
}


const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        authUserSet,
        favouriteDragonsAdd,
        favouriteDragonsRemove,
        authUserSignOut
    }
})

export const {
    authUserSet: authUserSetAction,
    favouriteDragonsAdd: favouriteDragonsAddAction,
    favouriteDragonsRemove: favouriteDragonsRemoveAction,
    authUserSignOut: authUserSignOutAction
} = authSlice.actions

export default authSlice.reducer

