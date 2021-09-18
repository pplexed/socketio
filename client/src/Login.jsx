import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import App from './App.jsx'
import MessageApp from './MessageApp.jsx';



const socket = io('http://localhost:3000')

const Login = () => {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])



  return (
    <div>
      <h1>Choose a chat app room</h1>
      <Link to="/message">
        <button type='button'> Join Room </button>
      </Link>
    </div>
  );
};

export default Login;