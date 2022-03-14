import React from 'react';
import {render} from 'react-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './notfound';
import Login from './login';
import Chat from './chat';
import store from './app/store';
import {Provider} from 'react-redux';

if (process.env.NODE_ENV === 'production') {
    console.log = function no_console() {
    };
    console.warn = function no_console() {
    };
    console.warn = function() {
    };
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ThemeProvider theme={darkTheme}>
                        <Login/>
                    </ThemeProvider>}>
                </Route>
                <Route path="/main" element={
                    <ThemeProvider theme={darkTheme}>
                        <Chat/>
                    </ThemeProvider>}>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);