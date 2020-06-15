import React from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignInPage.scss";

const SignInPage = () => {

  return(
    <div className="SignInPage">
      <div className="signin-box">
          <h3>Sign in</h3>
          <TextField className="signin-textfields" label="Email" fullWidth={true}/>
          <br/>
          <TextField className="signin-textfields" label="Password" type="password" fullWidth={true}/>
          <p className="signin-forgot">
            Forgot password?
          </p>
          <p className="signin-dont">
            Don't have an account? <span> </span>
            <Link to={"/signup"}>
              Sign up
            </Link>
          </p>
          <Button color="primary" variant="contained" fullWidth>SIGN IN</Button>
      </div>
    </div>
  )
};

export default SignInPage;