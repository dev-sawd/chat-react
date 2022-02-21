import React from "react"
import styled from "styled-components"
import MyMessage from "./myMessage";

const Middle = (props) => {
    return (
        <div style={props.style}>
            {/*<MyMessage style={{flexGrow:1, backgroundColor:"black"}}>*/}
            {/*</MyMessage>*/}
        </div>
    )
}

export default Middle