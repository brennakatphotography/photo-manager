import React, { Component } from 'react';
import { connectAll } from '../utils/connectStore';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <p>You must login to use this application</p>
        <button className="login-button" onClick={() => window.location.assign('/auth/login')}>Login</button>
      </div>
    );
  }
}
