import React, {useEffect, useState} from "react";
import {animateScroll as scroll} from 'react-scroll'
import ChatRoomBox from "./components/chatRoomBox";
import SocketManager from "./utils/SocketManager"
import LoginManager from "./utils/LoginManager";
import ChatManager from "./utils/ChatManager";
import Welcome from "./components/welcome";
import ChatBox from "./components/chatBox";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [userNameList, setUserNameList] = useState(ChatManager.getUserNameList());
    const [targetUserName, setTargetUserName] = useState(null);

    let socket = SocketManager.getSocket();

    useEffect(() => {
        ChatManager.setTargetUserName(LoginManager.getUserName())
    }, [])

    socket.on('message', (message) => {
        setMessages([...messages, message])
    })

    socket.on('loginUser', (userName) => {
        setUserNameList([...userNameList, userName])
        console.log('new user = ', userName)
    })

    socket.on('logoutUser', (userName) => {
        console.log('userNameList.length', userNameList.length)
        setUserNameList(userNameList.filter(function(userNameElement) {
            console.log(userNameElement, userName)
            return userNameElement !== userName
        }))
    })

    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#3c8eb0", overflowY: 'scroll'}}>
                <ChatRoomBox userName={LoginManager.getUserName()} lastMessage={'Chatting yourself'}
                             onClick={() => {
                                 setTargetUserName(LoginManager.getUserName())
                             }}/>
                {
                    userNameList.map((userName) => {
                        if (userName !== LoginManager.getUserName()) {
                            return <ChatRoomBox key={userName} userName={userName} lastMessage={'start chatting'}
                                                onClick={() => {
                                                    console.log(userName)
                                                    setTargetUserName(userName)
                                                }}/>
                        } else {
                            return null
                        }
                    })
                }
            </div>
            <div style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                overflowY: 'scroll',
                paddingBottom: '10%',
            }}>
                {
                    targetUserName === null ? <Welcome/> :
                        <ChatBox messages={messages} targetUserName={targetUserName}/>
                }
            </div>
        </div>
    )
}