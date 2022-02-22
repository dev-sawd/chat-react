import React from "react"

const MyMessageBox = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "#ac3cb0",
        }}>
            {/*<div style={{*/}
            {/*    flex: 1*/}
            {/*}}>*/}

            {/*</div>*/}
            <div style={{
                // flex: 3,
                borderStartStartRadius: 20,
                borderStartEndRadius: 20,
                borderEndStartRadius: 20,
                backgroundColor: "#50b8c2",
                padding: 10,
                margin: 10
            }}>
                {props.message}
            </div>
        </div>
    )
}

export default MyMessageBox