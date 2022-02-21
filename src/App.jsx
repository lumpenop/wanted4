import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login/login";
import CustomModal from "./component/modal/CustomModal";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/customModal" component={CustomModal} />
        </Switch>
      </Router>
    );
  }
}

export default App;
