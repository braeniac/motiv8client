import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    token: '', 
    msg: '', 
    error: '', 
    loading: false, 
}


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }, 
})

export default authSlice.reducer;