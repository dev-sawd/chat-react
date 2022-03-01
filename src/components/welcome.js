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
                            variant="h3" component="div" gutterBottom>
                    {LoginManager.getUserName()}님 환영합니다
                </Typography>
                <Typography style={{marginLeft: 100, fontWeight: "bold", color: 'white', width:'100%'}}
                            variant="h5" component="div" gutterBottom>
                    새 대화를 시작하세요
                </Typography>
            </div>
        </div>
    )
}

export default Welcome