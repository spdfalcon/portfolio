import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRequests from "../../Services/Axios/configs";
export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
    return apiRequests.get('/users')
        .then(res => res.data)
})

export const addUser = createAsyncThunk('users/addUser', async (
    {id,
    name,
    email,
    phone,
    desc,
    isAgree,
    subject}
) => {
    return apiRequests.post('/users', {
        id,
        name,
        email,
        phone,
        desc,
        isAgree,
        subject
    })
})

export const removeUser = createAsyncThunk('users/removeUser', async (id) => {
    return apiRequests.delete(`/users/${id}`)
})

let slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: boulder => {
        boulder.addCase(getAllUsers.fulfilled, (state, action) => {
            return action.payload
        })



        .addCase(addUser.fulfilled , (state , action)=>{
            return action.payload
        })
    }
})




export default slice.reducer