import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignInPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignInPage = () => {
  const classes = useStyles();

  return(
    <div className="SignInPage">
      <div className="signin-box">
        {/* <form className={classes.root} noValidate autoComplete="off"> */}
          <h3>Sign in</h3>
          <TextField className="signin-textfields" label="Email" fullWidth={true}/>
          <br/>
          <TextField className="signin-textfields" label="Password" type="password" fullWidth={true}/>
          <p className="signin-forgot">
            Forgot password?
          </p>
          <p className="signin-dont">
            Don't have an account? 
            <span className="signin-signup"> Sign up</span>
          </p>
          <Button color="primary" variant="contained" fullWidth>SIGN IN</Button>

        {/* </form> */}
      </div>
    </div>
  )
};

export default SignInPage;