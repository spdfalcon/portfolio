import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getAllProjectFromServer = createAsyncThunk(
    'projects/getAllProjectFromServer',
    async()=>{
        return fetch('https://json-server-vercel-neon-seven.vercel.app/project')
        .then(res=>res.json())
        .then(data=>data)
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
    }
})



export default slice.reducer