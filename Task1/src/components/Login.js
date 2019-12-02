import React from 'react';
import './Login.css';
import Form from './Form';

function Login() {
  return (
    <div className="login">
      <div className="left-side">
        <div className='left-container'>
          <h1 className="title">Redefining mobile advertising</h1>
          <p>Please use this form to register.</p>
          <p>If you are a member, please <a href='/login'>login</a>.</p>
        </div>
      </div>
      <div className="right-side">
        <img src="asset3.png" alt="logo" className="logo" />
        <Form className="form" />
      </div>
    </div>
  );
}

export default Login;