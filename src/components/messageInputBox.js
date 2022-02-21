import React from "react"
import styled from "styled-components"
import {TextField} from "@mui/material";

const MessageInputBox = () => {
    return (

        <TextField style={{
            position: "fixed",
            alignSelf: "center",
            bottom: 20,
            // borderRadius: 10,
            padding: 10,
            width: '70%',
        }}
                   placeholder="Write your message"
                   multiline
                   variant="filled"
        >
        </TextField>
    )
}

export default MessageInputBox