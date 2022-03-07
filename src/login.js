import React, {useEffect, useState} from "react"
import PCLayout from "./layouts/pcLayout"
import {Button, Card, FormControl, TextField} from "@mui/material"
import Typography from "@mui/material/Typography"
import {useNavigate} from "react-router-dom"
import io from 'socket.io-client'
import SocketManager from "./utils/SocketManager"
import ChatManager from "./utils/ChatManager"
import { useDispatch } from 'react-redux'
import { setLoginUser } from "./features/login/loginSlice";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')

    useEffect(() => {
        SocketManager.setSocket(io.connect('http://localhost:4000'))
    }, [])

    return (
        <PCLayout>
            <Card
                style={{
                    display:'flex',
                    flexDirection:'column',
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 20,
                    backgroundColor: '#252c3d'
                }}
            >
                <Typography style={{fontWeight: "bold", color: 'white', alignSelf: 'center'}}
                            variant="h4" component="div" gutterBottom>
                    SOCKET
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
                                dispatch(setLoginUser(userName))
                                SocketManager.getSocket().emit('login', {userName})
                                SocketManager.getSocket().on('returnLoginResponse', function (result, userNameList) {
                                    if (result) {
                                        ChatManager.setUserNameList(userNameList)
                                        navigate("/main")
                                    } else {
                                        alert('같은 아이디가 이미 존재합니다')
                                    }
                                })
                            }}>Connect</Button>
                </FormControl>
            </Card>
        </PCLayout>
    );
}