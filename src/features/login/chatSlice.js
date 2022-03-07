import {createSlice} from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        targetUserName: '',
        userNameList: [],
        messageList: []
    },
    reducers: {
        setTargetUserName: (state, action) => {
            state.targetUserName = action.payload
        },

        setUserNameList: (state, action) => {
            state.userNameList = action.payload
        },

        addUserName: (state, action) => {
            state.userNameList = [...state.userNameList, action.payload]
        },

        deleteUserName: (state, action) => {
            state.userNameList = state.userNameList.filter(function(userNameElement) {
                return userNameElement !== action.payload
            })
        },

        setMessageList: (state, action) => {
            state.messageList = action.payload
        },

        addMessage: (state, action) => {
            state.messageList = [...state.messageList, action.payload]
        },

    },
})

export const {setTargetUserName, setUserNameList, setMessageList, addMessage, addUserName, deleteUserName} = chatSlice.actions

export default chatSlice.reducer