import React, { Component } from "react";


import { Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";
import Login from "./components/login";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Router path="/login" component={Login} />
        </div>
        <div>
          <PrivateRoute path="/friendlist" component={FriendList} />
        </div>
      </div>
    );
  }
}

export default App;
