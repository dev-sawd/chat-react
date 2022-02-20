import React from "react"
import styled from "styled-components"
import {Link} from "react-scroll"

const SideDiv = styled.div`
  width: 20%;
  height: 1080px;
  position: fixed;
  margin-top: 0px;
  div {
    display: flex;
    flex-direction: column;
  }
`

const Side = () => {
    return (
        <SideDiv style={{backgroundColor: "#3c8eb0"}}>
            <div>
                <Link to="1" spy={true} smooth={true}>
                    <span>Day 1</span>
                </Link>
                <Link to="2" spy={true} smooth={true}>
                    <span>Day 2</span>
                </Link>
                <Link to="3" spy={true} smooth={true}>
                    <span>Day 3</span>
                </Link>
                <Link to="4" spy={true} smooth={true}>
                    <span>Day 4</span>
                </Link>
            </div>
        </SideDiv>
    )
}

export default Side