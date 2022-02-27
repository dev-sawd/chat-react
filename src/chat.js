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
import Welcome from "./components/welcome";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [userNameList, setUserNameList] = useState(ChatManager.getUserNameList());
    const [targetUserName, setTargetUserName] = useState(null);

    let socket = SocketManager.getSocket();

    useEffect(() => {
        ChatManager.setTargetUserName(LoginManager.getUserName())

        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message])
        })

        socket.on('loginUser', (userName) => {
            setUserNameList((userNameList) => [...userNameList, userName])
            console.log(userNameList)
        })

        // TODO : logoutUser를 리스트에서 삭제(현재 버그로 작동하지 않음)
        // socket.on('logoutUser', (userName) => {
        //     const index = userNameList.indexOf(userName);
        //     console.log(index, userName, userNameList)
        //     if (index !== -1) {
        //         setUserNameList((userNameList) => [userNameList.splice(2, 1)])
        //     }
        // })
    }, [])

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
                                                    setTargetUserName(userName)
                                                }}/>
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
                    targetUserName === null ? <Welcome/> : <InfoMessageBox targetUserName={LoginManager.getUserName()}/>
                }
            </div>
        </div>
    )
}