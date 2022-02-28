import React from "react"
import Typography from "@mui/material/Typography";
import LoginManager from "../utils/LoginManager";

const Welcome = (props) => {
    return (
        <div style={props.style}>
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography style={{marginLeft: 100, fontWeight: "bold", color: 'white'}}
                            variant="h4" component="div" gutterBottom>
                    {LoginManager.getUserName()}님 환영합니다<br/><br/>
                    왼쪽 로그인 유저 리스트를 선택해 새 대화를 시작하세요.
                </Typography>
            </div>
        </div>
    )
}

export default Welcome