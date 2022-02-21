import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";

import "./resources/css/login/login.css";

import {Provider} from "react-redux";
import {createStore} from "redux";
import saveUserApp from './reducers/reducers';

const store = createStore(saveUserApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Main extends React.Component {
  render() {
    return <App/>;
  }
}
export default Main;

ReactDOM.render(
  <Provider store = {store}>
    <Main />
  </Provider>
  ,
  document.getElementById("root"));