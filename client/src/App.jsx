import React, { Component } from 'react';
import io from 'socket.io-client'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login.jsx';
import MessageApp from './MessageApp.jsx';

const socket = io('http://localhost:3000')

const App = () => {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/message" component={MessageApp}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;