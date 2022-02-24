import React, {useEffect, useState} from "react";
import {animateScroll as scroll} from 'react-scroll'
import MyMessageBox from "./components/myMessageBox";
import OtherMessageBox from "./components/otherMessageBox";
import MessageInputBox from "./components/messageInputBox";
import ChatRoomBox from "./components/chatRoomBox";
import SocketManager from "./utils/SocketManager"
import LoginManager from "./utils/LoginManager";
import InfoMessageBox from "./components/infoMessageBox";
import ChatManager from "./utils/ChatManager";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [userNameList, setUserNameList] = useState(ChatManager.getUserNameList());
    console.log(ChatManager.getUserNameList())
    let socket = null;

    useEffect(() => {
        ChatManager.setTargetUserName(LoginManager.getUserName())
        socket = SocketManager.getSocket()
        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message])
        })

        socket.on('loginUser', (userName)  => {
            setUserNameList([...userNameList, userName])
        })
    }, [])

    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#3c8eb0", overflowY: 'scroll'}}>
                <ChatRoomBox userName={LoginManager.getUserName()} lastMessage={'Chatting yourself'}/>
                {
                    userNameList.map((userName) => {
                        if(userName !== LoginManager.getUserName())
                            return <ChatRoomBox userName={userName} lastMessage={'Chatting yourself'}/>
                    })
                }
            </div>
            <div style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ac3cb0",
                overflowY: 'scroll',
                paddingBottom: '10%',
            }}>
                <InfoMessageBox targetUserName={LoginManager.getUserName()}/>
                {
                    messages.map((message) => {
                        if (message.targetUserName === LoginManager.getUserName())
                            return <MyMessageBox key={message.message} message={message.message}/>
                        else
                            return <OtherMessageBox key={message.message} message={message.message}/>
                    })
                }
                <MessageInputBox/>
            </div>
        </div>
    )
}