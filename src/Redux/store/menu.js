import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuFromServer = createAsyncThunk(
    'menu/getMenuFromServer',
    async ()=>{
        return fetch('https://portfolio-json-server-vercel.vercel.app/menu')
        .then(res=>res.json())
        .then(data=>data)
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