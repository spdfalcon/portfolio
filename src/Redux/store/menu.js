import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuFromServer = createAsyncThunk(
    'menu/getMenuFromServer',
    async ()=>{
        return fetch('http://localhost:3000/menu')
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
    }
})



export default slice.reducer