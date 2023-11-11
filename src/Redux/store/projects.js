import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getAllProjectFromServer = createAsyncThunk(
    'projects/getAllProjectFromServer',
    async()=>{
        return fetch('https://portfolio-json-server-vercel.vercel.app/project')
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
        .addCase(getAllProjectFromServer.pending , ()=>{
            return 'pending'
        })
    }
})



export default slice.reducer