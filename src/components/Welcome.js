import React from 'react';
import LoginButton from './LoginButton';
import logo from '../logo.svg';

const Welcome = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      
        Welcome to A Quarter Inch
      </p>
      <LoginButton />
    </header>
  </div>
);

export default Welcome;
