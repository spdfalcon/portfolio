import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiRequests from "../../Services/Axios/configs";


export const getAllProjectFromServer = createAsyncThunk(
    'projects/getAllProjectFromServer',
    async()=>{
        return apiRequests.get('/project')
        .then(res=>res.data)
    }
)


const slice = createSlice({
    name:'projects',
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProjectFromServer.fulfilled, (state,action)=>{
            return action.payload
        })
        .addCase(getAllProjectFromServer.pending , ()=>{
            return 'pending'
        })
    }
})



export default slice.reducer