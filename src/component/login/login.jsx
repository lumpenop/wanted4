import React from "react";

import { setId } from "../../action/action";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello ppl
        <Link to="/customModal">CustomModal</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginRedux : (id) => { dispatch(setId(id))},
});

Login = connect(undefined, mapDispatchToProps)(Login);

export default Login;
