import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDragons } from "../../../api/dragons";


const DRAGON_LIST_FETCH_THUNK_TYPE = "DRAGON_LIST_FETCH_THUNK_TYPE";

export const dragonListFetch = createAsyncThunk(
    DRAGON_LIST_FETCH_THUNK_TYPE,
    async (_, { rejectWithValue }) => {
        try {
            return await getAllDragons();
        } catch (error) {
            rejectWithValue(error)
        }
    }
)