import React, {useRef} from "react"
import MessageInputBox from "./messageInputBox";
import InfoMessageBox from "./infoMessageBox";
import MyMessageBox from "./myMessageBox";
import OtherMessageBox from "./otherMessageBox";
import LoginManager from "../utils/LoginManager";
import CloseIcon from '@mui/icons-material/Cancel';

const ChatRoomBox = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <CloseIcon style={{
                position: 'fixed',
                top: 20,
                right: 50,
                alignSelf: 'right',
                color: 'white',
                width: '40',
                height: '40',
                opacity:'0.5'
            }}
               onClick={() => {
                   props.closeChatRoom()
               }}
            />
            <InfoMessageBox targetUserName={props.targetUserName}/>
            {
                props.messages.map((message, index) => {
                    if (message.sendUserName === LoginManager.getUserName())
                        return <MyMessageBox key={index} message={message.message}/>
                    else
                        return <OtherMessageBox key={index} message={message.message}/>
                })
            }
            <MessageInputBox/>
        </div>
    )
}

export default ChatRoomBox