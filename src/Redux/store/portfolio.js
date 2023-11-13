import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiRequests from "../../Services/Axios/configs";


export const getPortfolios = createAsyncThunk(
    'portfolios/getPortfolios' ,
     async ()=>{
        return apiRequests.get('/Portfolio')
        .then(res=>res.data)
     } )


const slice = createSlice({
    name:'portfolios',
    initialState:[],
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getPortfolios.fulfilled , (state , action)=>{
            return action.payload
        })
        .addCase(getPortfolios.pending , (state , action)=>{
            return 'pending'
        })
        // .addCase(getPortfolios.rejected , (state , action)=>{
        //     return 'rejected'
        // })

    }
})



export default slice.reducer