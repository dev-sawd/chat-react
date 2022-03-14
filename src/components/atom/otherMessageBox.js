import React from 'react';

const MyMessage = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                flex: 3,
                borderStartEndRadius: 20,
                borderEndStartRadius: 20,
                borderEndEndRadius: 20,
                backgroundColor: '#cea1c4',
                padding: 10,
                margin: 10,
            }}>
                {props.message}
            </div>
            <div style={{
                flex: 1
            }}>

            </div>
        </div>
    )
}

export default MyMessage