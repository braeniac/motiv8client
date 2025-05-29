import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | null; 
    firstName: string; 
    lastName: string; 
    email: string;
    img: string;
    isLoggedIn: boolean;
}

const initialState : UserState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    img: '',
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
           
        },
        logout: (state) => {
        
        }
    }
})


export const { login, logout }  = userSlice.actions;


export default userSlice.reducer;