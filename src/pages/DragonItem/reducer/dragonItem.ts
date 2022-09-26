import { createSlice } from "@reduxjs/toolkit";
import { Dragon } from "../../../types";
import { dragonItemFetch } from '../thunk/dragonItem'


type DragonItemState = {
    loading: boolean,
    error: boolean | null,
    data: Partial<Dragon>
}

const initialState: DragonItemState = {
    loading: true,
    error: null,
    data: {}
}

const name = "DRAGON_ITEM"

const dragonItemSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(dragonItemFetch.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(dragonItemFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload!
            })
            .addCase(dragonItemFetch.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    },
})



export default dragonItemSlice.reducer