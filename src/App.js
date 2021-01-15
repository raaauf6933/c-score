import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container mt-5">
        {" "}
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register/" component={Register}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
