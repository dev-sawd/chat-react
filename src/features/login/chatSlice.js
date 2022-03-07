import {createSlice} from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        targetUserName: null,
        userNameList: null
    },
    reducers: {
        setTargetUserName: (state, action) => {
            state.targetUserName = action.payload
        },

        setUserNameList: (state, action) => {
            state.userNameList = action.payload
        },

    },
})

export const { setTargetUserName, setUserNameList } = chatSlice.actions

export default chatSlice.reducer