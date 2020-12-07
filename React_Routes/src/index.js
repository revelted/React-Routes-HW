import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Happy from "./components/Happy";
import Sleepy from "./components/Sleepy";
import Guilty from "./components/Guilty";

// your code goes here
class Home extends Component {
  render() {
    return (
      // your code goes here
      <Router>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/happy">
              <li>Happy</li>
            </Link>
            <Link to="/guilty">
              <li>Guilty</li>
            </Link>
            <Link to="/sleepy">
              <li>Sleepy</li>
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" />
          <Route path="/happy" component={Happy} />
          <Route path="/guilty" component={Guilty} />
          <Route path="/sleepy" component={Sleepy} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));