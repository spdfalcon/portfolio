import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import apiRequests from "../../Services/Axios/configs";
export const getMenuFromServer = createAsyncThunk(
    'menu/getMenuFromServer',
    async ()=>{
        return apiRequests.get('/menu')
        .then(res=>res.data)
    }
)


const slice = createSlice({
    name:'menu',
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getMenuFromServer.fulfilled , (state , action)=>{
            return action.payload
        })
        .addCase(getMenuFromServer.pending , ()=>{
            return 'pending'
        })
        .addCase(getMenuFromServer.rejected , ()=>{
            return 'rejected'
        })
    }
})



export default slice.reducer