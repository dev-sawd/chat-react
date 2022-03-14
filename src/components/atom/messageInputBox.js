import React, {useState} from 'react';
import {TextField} from '@mui/material';
import SocketManager from '../../utils/SocketManager';
import {useSelector} from 'react-redux';

const MessageInputBox = () => {
  const [message, setMessage] = useState('');

  const loginUser = useSelector((state) => state.loginUser.user);
  const targetUserName = useSelector((state) => state.chat.targetUserName);

  return (
      <TextField style={{
        position: 'fixed',
        bottom: 20,
        padding: 10,
        width: '70%',
        alignSelf: 'center',
      }}
                 placeholder="Write your message"
                 multiline
                 variant="filled"
                 value={message}
                 onKeyPress={(event) => {
                   if (event.key === 'Enter') {
                     SocketManager.getSocket().emit('sendMessage', {
                       sendUserName: loginUser,
                       targetUserName: targetUserName,
                       message: message,
                     });
                     setMessage('');
                     event.preventDefault();
                   }
                 }}
                 onChange={(event) => {
                   setMessage(event.target.value);
                 }}
      >
      </TextField>
  );
};

export default MessageInputBox