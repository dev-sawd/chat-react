import React, {useEffect, useRef, useState} from "react";
import ChatRoomBox from "./components/chatRoomBox";
import SocketManager from "./utils/SocketManager"
import Welcome from "./components/welcome";
import ChatBox from "./components/chatBox";
import {useDispatch, useSelector} from 'react-redux'
import {addMessage, addUserName, deleteUserName} from "./features/login/chatSlice";

export default function Chat() {
    const dispatch = useDispatch()

    const [targetUserName, setTargetUserName] = useState(null);

    const messagesEnd = useRef();

    const loginUser = useSelector((state) => state.loginUser.user)
    const messageList = useSelector((state) => state.chat.messageList)
    const userNameList = useSelector((state) => state.chat.userNameList)

    function scrollToBottom() {
        messagesEnd.current.scrollIntoView();
    }

    let socket = SocketManager.getSocket();

    useEffect(() => {
        socket.on('message', (message) => {
            dispatch(addMessage(message))
        })

        socket.on('loginUser', (userName) => {
            dispatch(addUserName(userName))
        })

        socket.on('logoutUser', (userName) => {
            dispatch(deleteUserName(userName))
        })
    }, [])

    function closeChatRoom() {
        setTargetUserName(null)
    }

    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#9c83be", overflowY: 'scroll'}}>
                <ChatRoomBox userName={loginUser}
                             lastMessage={messageList.filter(message => (message.sendUserName === loginUser && message.targetUserName === loginUser))}
                             onClick={() => {
                                 setTargetUserName(loginUser)
                             }}/>
                {
                    userNameList.map((userName) => {
                        if (userName !== loginUser) {
                            return <ChatRoomBox key={userName} userName={userName}
                                                lastMessage={messageList.filter(message => ((message.sendUserName === loginUser && message.targetUserName === userName)
                                                    || (message.sendUserName === userName && message.targetUserName === loginUser)))}
                                                onClick={() => {
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
            }}>
                {
                    targetUserName === null
                        ? <Welcome/>
                        : <ChatBox messages={messageList.filter(function(message){
                            return (message.sendUserName === loginUser && message.targetUserName === targetUserName)
                            || (message.sendUserName === targetUserName && message.targetUserName === loginUser)
                        })} targetUserName={targetUserName} closeChatRoom={closeChatRoom}
                                 scrollToBottom={scrollToBottom} messagesEnd={messagesEnd}/>
                }
                <div style={{marginTop:100}}/>
                <div ref={messagesEnd}/>
            </div>
        </div>
    )
}