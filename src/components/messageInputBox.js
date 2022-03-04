import React, {useState} from "react"
import {TextField} from "@mui/material";
import SocketManager from "../utils/SocketManager";
import ChatManager from "../utils/ChatManager";
import LoginManager from "../utils/LoginManager";

const MessageInputBox = (props) => {
    const [message, setMessage] = useState('')
    return (
        <TextField style={{
            position:'fixed',
            bottom: 20,
            padding: 10,
            width: '70%',
            alignSelf:'center'
        }}
                   placeholder="Write your message"
                   multiline
                   variant="filled"
                   value={message}
                   onKeyPress={(event) => {
                       if (event.key === 'Enter') {
                           SocketManager.getSocket().emit('sendMessage', {sendUserName: LoginManager.getUserName(), targetUserName: ChatManager.getTargetUserName(), message: message})
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