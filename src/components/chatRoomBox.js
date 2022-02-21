import React from "react"
import styled from "styled-components"

const ChatRoomBox = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                borderRadius: 10,
                backgroundColor: "#cea1c4",
                padding: 10,
                margin: 10,
                display: "flex",
                flexDirection: "row",
                width:'100%'
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
                    <div>Name</div>
                    <div>Last message</div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoomBox