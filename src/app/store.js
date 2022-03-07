import {configureStore} from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import {logger} from "redux-logger/src";

export default configureStore({
    reducer: {loginUser: loginReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})