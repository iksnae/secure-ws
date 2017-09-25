import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const socketserver_url = `ws://localhost:8080`;


console.log("WSS")

class App extends Component {

  state = {
    ws_connection_status:"not connected"
  }

  constructor(){
    super()
    console.log(`connecting to ${socketserver_url}`);
    var app = this;
    var socket = require('socket.io-client')();
    socket.on('connect', function(){
      console.log("WS on connect");
      app.setState({ws_connection_status:"connected"});
      socket.emit("message","hello from client");
    });
    socket.on('event', function(data){
      console.log("WS on event");
    });
    socket.on('message', function(message){
      console.log("message:", message);
    });
    socket.on('disconnect', function(){
      app.setState({ws_connection_status:"disconnected"});
      console.log("WS on disconnect");
    });
    socket.on('reconnect_attempt',()=>{
      app.setState({ws_connection_status:"attempting to reconnect"});
      console.log("attempting to reconnect.")
    });
    socket.on('reconnect', (attemptNumber) => {
      app.setState({ws_connection_status:"reconnecting..."});
      console.log("reconnecting...")
    });
    socket.on('connect_error', (error) => {
      app.setState({ws_connection_status:"error connecting: "+ error});
      console.log(`Connection Error:  ${error}`)
    });
 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome.</h2>
        </div>
        <p className="App-intro">
         {this.state.ws_connection_status}
        </p>
      </div>
    );
  }
}

export default App;
