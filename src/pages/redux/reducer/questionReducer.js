import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];


const getAllData = createAsyncThunk("question/get",
    async (payload) => {
        
    }
)

const questionSlice = createSlice({
    name: "question",
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase()
    }
})