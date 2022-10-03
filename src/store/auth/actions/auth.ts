import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { AuthState } from "../reducer/auth";


export const authUserSet = (
    state: AuthState,
    action: PayloadAction<User>
) => {
    state.user = action.payload
};