import React, {useEffect, useState} from "react";
import PCLayout from "./layouts/pcLayout";
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import io from 'socket.io-client';
import SocketManager from "./utils/SocketManager"
import LoginManager from "./utils/LoginManager";
import ChatManager from "./utils/ChatManager";

export default function Login() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState('')

    useEffect(() => {
        SocketManager.setSocket(io.connect('http://localhost:4000'))
    }, [])

    return (
        <PCLayout>
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography style={{paddingTop: "20px", fontWeight: "bold", color: 'white'}}
                            variant="h4" component="div" gutterBottom>
                    DEVSAWD CHAT
                </Typography>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <TextField
                        label="ID"
                        sx={{width: '25ch'}}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <Button variant="contained" style={{width: 250, height: 50}}
                            onClick={() => {
                                if (userName === "")
                                    return
                                LoginManager.setUserName(userName)
                                SocketManager.getSocket().emit('login', {userName})
                                SocketManager.getSocket().on('returnLoginResponse', function (result, userNameList) {
                                    if (result) {
                                        ChatManager.setUserNameList(userNameList)
                                        navigate("/main")
                                    } else {
                                        alert('같은 아이디가 이미 존재합니다')
                                    }
                                })
                            }}>Login</Button>
                </FormControl>
            </div>
        </PCLayout>
    );
}