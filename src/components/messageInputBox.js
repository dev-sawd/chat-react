import React, {useState} from "react"
import styled from "styled-components"
import {TextField} from "@mui/material";
import SocketManager from "../utils/SocketManager";
import ChatManager from "../utils/ChatManager";

const MessageInputBox = () => {
    const [message, setMessage] = useState('')
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
                   value={message}
                   onKeyPress={(event) => {
                       if (event.key === 'Enter') {
                           // console.log('enter')
                           SocketManager.getSocket().emit('sendMessage', {targetUserName: ChatManager.getTargetUserName(), message: message})
                           setMessage('')
                           event.preventDefault();
                       }
                   }}
                   onChange={(event) => {
                       setMessage(event.target.value)
                   }}
        >
        </TextField>
    )
}

export default MessageInputBox