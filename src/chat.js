import React, {useEffect} from "react";
import styled from "styled-components"
import PCLayout from "./layouts/pcLayout";
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import Side from "./components/side";
import Middle from "./components/middle";

export default function Chat() {
    return (
            <div style={{height:'100vh', display: "flex", flexDirection:"row"}}>
                <Side style={{flexGrow: 1,backgroundColor: "#3c8eb0", overflowY: 'scroll'}}/>
                <Middle style={{flexGrow:3, backgroundColor: "#ac3cb0", overflowY: 'scroll'}}/>
            </div>
    )
}