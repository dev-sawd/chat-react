import React from "react"
import {Card} from "@mui/material";
import ChatManager from "../utils/ChatManager";

const ChatRoomBox = (props) => {
    return (
        <div onClick={props.onClick}>
            <Card style={{
                display: "flex",
                flexDirection: "row",
                margin:10
            }}
            onClick={()=>ChatManager.setTargetUserName(props.userName)}>
                <div style={{
                    borderRadius: 10,
                    // backgroundColor: "#cea1c4",
                    padding: 10,
                    margin: 10,
                    display: "flex",
                    flexDirection: "row",
                    width: '100%'
                }}>
                    <div style={{
                        flex: 1,
                        minWidth: 60,
                        minHeight: 60,
                        maxWidth: 60,
                        maxHeight: 60,
                        borderRadius: 60,
                        backgroundColor: "darkcyan",
                        textAlign: "center",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold'
                    }}>
                        {props.userName.substring(0, 1)}
                    </div>
                    <div style={{
                        flex: 5, display: "flex",
                        flexDirection: "column",
                        marginLeft: 30,
                    }}>
                        <div>{props.userName}</div>
                        <div>{props.lastMessage}</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ChatRoomBox