import { createSlice } from "@reduxjs/toolkit";
import { Dragon } from "../../../types";
import { dragonListFetch } from '../thunk/dragonList'


type DragonListState = {
    loading: boolean,
    error: boolean | null,
    data: Dragon[] | []
}

const initialState: DragonListState = {
    loading: true,
    error: null,
    data: []
}

const name = "DRAGON_LIST"

const dragonListSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(dragonListFetch.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(dragonListFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload!
            })
            .addCase(dragonListFetch.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    },
})



export default dragonListSlice.reducer