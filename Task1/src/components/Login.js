import React from 'react';
import './Login.css';
import Form from './Form';

function Login() {
  return (
    <div className="login">
      <div className="left-side">
        <h1>REDEFINING MOBILE ADVERTISING</h1>
        <p>Please use this form to register.</p>
        <p>If you are a member, please <a href='#login'>login</a>.</p>
      </div>
      <div className="right-side">
        <img src="asset3.png" alt="logo" />
        <Form className="form" />
        <a className="oauth-container" href="/users/google-oauth/">
          <img width="15px" alt="google-logo" className="google-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
          <p className="google-signin"> Sign in with Google </p>
        </a>
      </div>
    </div>
  );
}

export default Login;