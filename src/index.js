import React from "react";
import {render} from "react-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NotFound from "./notfound";
import Login from "./login";
import Chat from "./chat";


if (process.env.NODE_ENV === 'production') {
    console.log = function no_console() {
    };
    console.warn = function no_console() {
    };
    console.warn = function () {
    };
}

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import Media from 'react-media'

// const firebaseConfig = {
//     apiKey: "AIzaSyBp9btqhqy5tQamF14oMgtMqu_xxZFDILs",
//     authDomain: "loain-66b27.firebaseapp.com",
//     projectId: "loain-66b27",
//     storageBucket: "loain-66b27.appspot.com",
//     messagingSenderId: "272818676679",
//     appId: "1:272818676679:web:cceb1f7ea5957655056fe2",
//     measurementId: "G-67RCP7HXHH"
// };

// const MEDIA_QUERIES = {
//     pc : '(min-width: 1025px)',
//     mobile: '(max-width: 1024px)',
// };

// const app = initializeApp(firebaseConfig);
// getAnalytics(app);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


render(
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
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);