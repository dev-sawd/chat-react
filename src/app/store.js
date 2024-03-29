import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import chatReducer from '../features/chatSlice';
import {logger} from 'redux-logger/src';

export default configureStore({
  reducer: {loginUser: loginReducer, chat: chatReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});