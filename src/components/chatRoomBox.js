import React from "react"
import {Card} from "@mui/material";

const ChatRoomBox = (props) => {
    return (
        <div>
            <Card style={{
                display: "flex",
                flexDirection: "row",
                margin:10
            }}
            onClick={()=>alert('o')}>
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
                        alignSelf: "center",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}>
                        Picture
                    </div>
                    <div style={{
                        flex: 5, display: "flex",
                        flexDirection: "column",
                        marginLeft: 10,
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