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
                flex: 1
            }}>

            </div>
            <div style={{
                flex: 3,
                borderStartStartRadius: 20,
                borderStartEndRadius: 20,
                borderEndStartRadius: 20,
                backgroundColor: "#50b8c2",
                padding: 10,
                margin: 10
            }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type
                and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with
                the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}

export default MyMessage