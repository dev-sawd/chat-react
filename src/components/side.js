import React from "react"
import styled from "styled-components"
import {Link} from "react-scroll"


const Side = (props) => {
    return (
        <div style={props.style} >
            <div>
                <Link to="1" spy={true} smooth={true}>
                    <span>대화 상대 ID</span>
                </Link>
            </div>
        </div>
    )
}

export default Side