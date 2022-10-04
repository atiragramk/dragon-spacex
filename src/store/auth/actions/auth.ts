import { PayloadAction } from "@reduxjs/toolkit";
import { Dragon, User } from "../../../types";
import { AuthState } from "../reducer/auth";


export const authUserSet = (
    state: AuthState,
    action: PayloadAction<User>
) => {
    state.user = action.payload
};

export const authUserSignOut = (state: AuthState) => {
    state.user = null;
    state.dragons = []
    localStorage.removeItem('user')
}


export const favouriteDragonsAdd = (state: AuthState,
    action: PayloadAction<Partial<Dragon>>) => {
    state.dragons = [...state.dragons, action.payload]
}

export const favouriteDragonsRemove = (state: AuthState,
    action: PayloadAction<Partial<Dragon>>) => {
    state.dragons = state.dragons.filter((dragon) => dragon.id !== action.payload.id)
}