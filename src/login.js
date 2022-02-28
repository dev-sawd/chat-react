import React, {useEffect, useState} from "react";
import PCLayout from "./layouts/pcLayout";
import {Button, Card, FormControl, TextField} from "@mui/material";
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
            <Card
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 20,
                    backgroundColor: '#252c3d'
                }}
            >
                <Typography style={{fontWeight: "bold", color: 'white'}}
                            variant="h4" component="div" gutterBottom>
                    DEVSAWD CHAT
                </Typography>
                <FormControl sx={{m: 1, minWidth: 80, display:'flex', flexDirection:"column"}}>
                    <TextField
                        label="ID"
                        sx={{width: '100%', alignContent:'center'}}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <Button variant="contained" style={{marginTop : 10, width: '100%', height: 50, fontSize: '20px', fontWeight: 'bold', color: '#252c3d', backgroundColor: '#9c83be'}}
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
            </Card>
        </PCLayout>
    );
}