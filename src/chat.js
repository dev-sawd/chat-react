import React, {useEffect} from "react";
import {animateScroll as scroll} from 'react-scroll'
import MyMessageBox from "./components/myMessageBox";
import OtherMessageBox from "./components/otherMessageBox";
import MessageInputBox from "./components/messageInputBox";
import ChatRoomBox from "./components/chatRoomBox";
import SocketManager from "./utils/socketManager"
import LoginManager from "./utils/LoginManager";

export default function Chat() {
    let socket = null;

    useEffect(() => {
        socket = SocketManager.getSocket()
        socket.on('message', (message) => {
            // setMessages((messages) => [...messages, message])
            console.log('메세지 송신', message)
        })

        // socket.on('roomData', ({ users }) => {
        //     setUsers(users)
        // })
    }, [])

    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#3c8eb0", overflowY: 'scroll'}}>
                <ChatRoomBox userName={LoginManager.getUserName()} lastMessage={'Chatting yourself'}/>
                {/*<ChatRoomBox/>*/}
                {/*<ChatRoomBox/>*/}
                {/*<ChatRoomBox/>*/}
            </div>
            <div style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ac3cb0",
                overflowY: 'scroll',
                paddingBottom: '10%',
            }}>
                {/*<OtherMessageBox/>*/}
                {/*<MyMessageBox/>*/}
                {/*<MessageInputBox/>*/}
            </div>
        </div>
    )
}