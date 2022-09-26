import { createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import { getDragon } from "../../../api/dragons";


const DRAGON_ITEM_FETCH_THUNK_TYPE = "DRAGON_ITEM_FETCH_THUNK_TYPE";

export const dragonItemFetch = createAsyncThunk(
    DRAGON_ITEM_FETCH_THUNK_TYPE,
    async (id: string, { rejectWithValue }) => {
        try {
            return await getDragon(id);
        } catch (error) {
            rejectWithValue(error)
        }
    }
)