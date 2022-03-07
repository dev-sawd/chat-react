import React from "react"

const InfoMessageBox = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>

            <div style={{
                borderRadius: 20,
                backgroundColor: "#b4ce76",
                padding: 10,
                margin: 10,
                alignSelf: 'center',
                fontWeight: 'bold'
            }}>
                {props.targetUserName}님과 채팅이 시작되었습니다
            </div>
        </div>
    )
}

export default InfoMessageBox