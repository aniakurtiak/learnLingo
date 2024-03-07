import { createSlice } from "@reduxjs/toolkit"
import {auth} from '../../firebase'
 
const initialState = {
    authUser: auth.currentUser,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser(state, action) {
            const { uid, displayName, email } = action.payload;
            state.authUser = { uid, displayName, email };
        }
    }
})

export const {setAuthUser} = authSlice.actions;
export const authReducer = authSlice.reducer;