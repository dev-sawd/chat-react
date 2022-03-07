import React from "react"
import {useDispatch, useSelector} from "react-redux";
import ChatRoomBox from "./atom/chatRoomBox";
import {setTargetUserName} from "../features/chatSlice";

const ChatRoomSide = () => {
    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state.loginUser.user)
    const messageList = useSelector((state) => state.chat.messageList)
    const userNameList = useSelector((state) => state.chat.userNameList)

    return (
        <div>
            <ChatRoomBox userName={loginUser}
                         lastMessage={messageList.filter(message => (message.sendUserName === loginUser && message.targetUserName === loginUser))}
                         onClick={() => {
                             dispatch(setTargetUserName(loginUser))
                         }}/>
            {
                userNameList.map((userName) => {
                    if (userName !== loginUser) {
                        return <ChatRoomBox key={userName} userName={userName}
                                            lastMessage={messageList.filter(message => ((message.sendUserName === loginUser && message.targetUserName === userName)
                                                || (message.sendUserName === userName && message.targetUserName === loginUser)))}
                                            onClick={() => {
                                                dispatch(setTargetUserName(userName))
                                            }}/>
                    } else {
                        return null
                    }
                })
            }
        </div>
    )
}

export default ChatRoomSide