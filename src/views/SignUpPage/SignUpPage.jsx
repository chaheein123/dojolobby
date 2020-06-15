import React from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignUpPage.scss";

const SignUpPage = () => {

  return (
    <div className="SignInPage">
      <div className="signin-box">
          <h3>Hey, sign up!</h3>
          {/* wfwoeifjwoifjwfe */}
          <TextField className="signin-textfields signup-names signup-name-left" label="First Name"/>
          <TextField className="signin-textfields signup-names signup-name-right" label="Last Name"/>

          <TextField className="signin-textfields" label="Email" fullWidth={true}/>
          <br/>
          <TextField className="signin-textfields" label="Password" type="password" fullWidth={true}/>
          <TextField className="signin-textfields" label="Confirm password" type="password" fullWidth={true}/>
          <p className="signin-forgot">
            Forgot password?
          </p>
          <p className="signin-dont">
            Already have an account? <span> </span>
            <Link to={"/signin"}>
              Sign in
            </Link>
          </p>
          <Button color="primary" variant="contained" fullWidth>SIGN UP</Button>
      </div>
    </div>
  )
};

export default SignUpPage;