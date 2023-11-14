import {createSlice} from "@reduxjs/toolkit";

//역할에 따른 슬라이스 분리
const initialAuthState = {
    isAuthenticated : false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer