import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null, 
    msg: '', 
    error: '', 
    loading: false, 
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload; 
            state.user = user; 
            state.token = accessToken; 
            state.loading = true;
        },
        logOut: (state, action) => {
            state.user = null; 
            state.token = null; 
            state.msg = ''; 
            state.error = ''; 
            state.loading = false; 
        }
    }, 
})

export const { setCredentials, logOut } = authSlice.actions; 

export default authSlice.reducer;

//selectors 
export const selectCurrentUser = (state) => state.auth.user; 
export const selectCurrentToken = (state) => state.auth.token; 