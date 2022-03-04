import React, {useEffect, useRef, useState} from "react";
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

    const messagesEnd = useRef();

    function scrollToBottom() {
        messagesEnd.current.scrollIntoView();
    }

    let socket = SocketManager.getSocket();

    useEffect(() => {
        ChatManager.setTargetUserName(LoginManager.getUserName())

        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message])
            scrollToBottom();
        })

    }, [])

    // TODO : lastmessage 버그 수정 후 삭제
    useEffect(() => {
        console.log(messages)
    }, [messages])

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

    function closeChatRoom() {
        setTargetUserName(null)
    }

    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#9c83be", overflowY: 'scroll'}}>
                {/*TODO:lastmessage 버그 수정*/}
                <ChatRoomBox userName={LoginManager.getUserName()}
                             lastMessage={messages.filter(message => (message.sendUserName === LoginManager.getUserName() && message.targetUserName === LoginManager.getUserName()))[messages.length - 1]}
                             onClick={() => {
                                 console.log(messages)
                                 setTargetUserName(LoginManager.getUserName())
                             }}/>
                {
                    userNameList.map((userName) => {
                        if (userName !== LoginManager.getUserName()) {
                            return <ChatRoomBox key={userName} userName={userName}
                                                lastMessage={messages.filter(message => ((message.sendUserName === LoginManager.getUserName() && message.targetUserName === userName)
                                                    || (message.sendUserName === userName && message.targetUserName === LoginManager.getUserName())))[messages.length - 1]}
                                                onClick={() => {
                                                    console.log(messages)
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
                    targetUserName === null ? <Welcome/> :
                        <ChatBox messages={messages.filter(function(message){
                            return (message.sendUserName === LoginManager.getUserName() && message.targetUserName === targetUserName)
                            || (message.sendUserName === targetUserName && message.targetUserName === LoginManager.getUserName())
                        })} targetUserName={targetUserName} closeChatRoom={closeChatRoom}/>
                }
                <div style={{marginTop:100}}/>
                <div ref={messagesEnd}/>
            </div>
        </div>
    )
}