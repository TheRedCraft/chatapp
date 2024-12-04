import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io('http://localhost:4000');

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    socket.emit('message', messageText);
    setMessageText('');
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    });

    return () => socket.off('message');
  }, []);

  return (
    <div className="chat-room">
      <h2>Chat Room</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input 
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
