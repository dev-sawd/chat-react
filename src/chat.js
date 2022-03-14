import React, {useEffect, useRef} from 'react';
import SocketManager from './utils/SocketManager';
import WelcomeSide from './components/welcomeSide';
import ChatBox from './components/chatSide';
import {useDispatch, useSelector} from 'react-redux';
import {
    addMessage,
    addUserName,
    deleteUserName,
    setTargetUserName,
} from './features/chatSlice';
import ChatRoomSide from './components/chatRoomSide';

export default function Chat() {
    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state.loginUser.user);
    const messageList = useSelector((state) => state.chat.messageList);
    const targetUserName = useSelector((state) => state.chat.targetUserName);

    const messagesEnd = useRef();

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
        dispatch(setTargetUserName(null))
    }

    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'row'}}>
            <div style={{
                flex: 1,
                backgroundColor: '#9c83be',
                overflowY: 'scroll',
            }}>
                <ChatRoomSide/>
            </div>
            <div style={{
                flex: 3,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll',
            }}>
                {
                    targetUserName === null
                        ? <WelcomeSide/>
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