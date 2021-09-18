import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'


const socket = io('http://localhost:3000')

const App = () => {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  const handleChange = (e) => {
    setMessage(e.target.value)
  };

  useEffect(() => {
    socket.on('message', payload => {
      setChat([...chat, payload])
    })
  })

  const messages = chat.map((payload, index)=>{
    return(
      <h3 key={index}> <span>{payload.message}</span></h3>
    )
  })

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    socket.emit('message',{message})
    setMessage('')
  };

  return (
    <div>
    <h1>Welcome to chat app</h1>
    <form onSubmit={sendMessage}>
      <input type="text" name="message" placeholder='Type message' value={message} onChange={handleChange}required></input>
      <button type='submit'>Send</button>
    </form>
    {messages}
  </div>
  );
};

export default App;