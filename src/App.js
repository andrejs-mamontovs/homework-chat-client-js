import React, { Component } from "react";
import "./App.css";
import Login from "./containers/login";
import Chat from "./containers/chat";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Chat />
      </div>
    );
  }
}

export default App;
