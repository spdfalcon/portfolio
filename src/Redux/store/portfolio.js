import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getPortfolios = createAsyncThunk(
    'portfolios/getPortfolios' ,
     async ()=>{
        return fetch('http://localhost:3000/Portfolio')
        .then(res=>res.json())
        .then(data=>data)
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
    }
})



export default slice.reducer