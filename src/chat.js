import React, {useEffect} from "react";
import styled from "styled-components"
import PCLayout from "./layouts/pcLayout";
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import Side from "./components/side";
import Middle from "./components/middle";
import MyMessage from "./components/myMessage";
import OtherMessage from "./components/otherMessage";

export default function Chat() {
    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#3c8eb0", overflowY: 'scroll'}}/>
            <div style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ac3cb0",
                overflowY: 'scroll'
            }}>
                <OtherMessage></OtherMessage>
                <MyMessage></MyMessage>
            </div>
        </div>
    )
}