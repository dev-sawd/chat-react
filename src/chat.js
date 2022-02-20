import React, {useEffect} from "react";
import styled from "styled-components"
import PCLayout from "./layouts/pcLayout";
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import Side from "./components/side";
import Middle from "./components/middle2";

const MainDiv = styled.div`
`

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`

export default function Chat() {
    return (
        <MainDiv>
            <ContentDiv>
                <Side />
                <Middle />
            </ContentDiv>
        </MainDiv>
    )
}