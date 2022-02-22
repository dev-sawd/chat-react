import React from "react"

const InfoMessageBox = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center"
        }}>

            <div style={{
                borderRadius: 20,
                backgroundColor: "#b4ce76",
                padding: 10,
                margin: 10
            }}>
                {props.targetUserName}님과 채팅이 시작되었습니다
            </div>
        </div>
    )
}

export default InfoMessageBox