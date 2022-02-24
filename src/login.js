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
                    {/*<Link key={"main"} to={"/main"} align={'center'}*/}
                    {/*      style={{marginTop: "20px", textDecoration: 'none'}}>*/}
                        <Button variant="contained" style={{width: 250, height: 50}}
                                onClick={() => {
                                    LoginManager.setUserName(userName)
                                    SocketManager.getSocket().emit('login', {userName})
                                    SocketManager.getSocket().on('returnLoginResponse', function(userNameList) {
                                        console.log(userNameList)
                                        ChatManager.setUserNameList(userNameList)

                                        navigate("/main")
                                    })
                                }}>Login</Button>
                    {/*</Link>*/}
                </FormControl>
            </div>
        </PCLayout>
    );
}