import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginUser',
    initialState: {
        user: null,
    },
    reducers: {
        setLoginUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoginUser } = loginSlice.actions

export default loginSlice.reducer