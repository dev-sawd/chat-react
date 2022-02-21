import React from "react";
import {animateScroll as scroll} from 'react-scroll'
import MyMessageBox from "./components/myMessageBox";
import OtherMessageBox from "./components/otherMessageBox";
import MessageInputBox from "./components/messageInputBox";
import ChatRoomBox from "./components/chatRoomBox";

export default function Chat() {
    return (
        <div style={{height: '100vh', display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, backgroundColor: "#3c8eb0", overflowY: 'scroll'}}>
                <ChatRoomBox></ChatRoomBox>
                <ChatRoomBox></ChatRoomBox>
                <ChatRoomBox></ChatRoomBox>
                <ChatRoomBox></ChatRoomBox>
            </div>
            <div style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ac3cb0",
                overflowY: 'scroll',
                paddingBottom: '10%',
            }}>
                <OtherMessageBox></OtherMessageBox>
                <MyMessageBox></MyMessageBox>
                <MessageInputBox></MessageInputBox>
            </div>
        </div>
    )
}