import React from "react"
import {Card} from "@mui/material";
import {setTargetUserName} from "../../features/chatSlice";
import {useDispatch} from "react-redux";

const ChatRoomBox = (props) => {
    const dispatch = useDispatch()

    return (
        <div onClick={props.onClick}>
            <Card style={{
                display: "flex",
                flexDirection: "row",
                margin: 10
            }}
                  onClick={() =>
                      dispatch(setTargetUserName(props.userName))}>
                <div style={{
                    borderRadius: 10,
                    padding: 10,
                    margin: 10,
                    display: "flex",
                    flexDirection: "row",
                    width: '100%',
                }}>
                    <div style={{
                        flex: 1,
                        minWidth: 60,
                        minHeight: 60,
                        maxWidth: 60,
                        maxHeight: 60,
                        borderRadius: 60,
                        backgroundColor: "#6d568e",
                        textAlign: "center",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
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
                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>{props.userName}</div>
                        {props.lastMessage !== undefined && props.lastMessage.length > 0
                            ? <div
                                style={{fontSize: '14px'}}>{props.lastMessage[props.lastMessage.length - 1].message.substring(0, 40)}...</div>
                            : <div style={{fontSize: '14px'}}>새 대화를 시작하세요.</div>
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ChatRoomBox