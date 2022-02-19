import React from "react";
import Typography from '@mui/material/Typography';

export default function PCLayout(props) {
    return (
        <div style={{backgroundColor: 'rgba(38, 45, 62, 1)', height: "100vh"}}>
            {props.children}
        </div>
    )
}

