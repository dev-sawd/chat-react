import React from "react"
import styled from "styled-components"

const MyMessage = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#ac3cb0",
        }}>
            <div style={{
                flex: 3,
                borderStartEndRadius: 20,
                borderEndStartRadius: 20,
                borderEndEndRadius: 20,
                backgroundColor: "#cea1c4",
                padding: 10,
                margin: 10
            }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div style={{
                flex: 1
            }}>

            </div>
        </div>
    )
}

export default MyMessage